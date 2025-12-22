import { Component, OnInit, inject, signal, computed } from '@angular/core'; // 1. Importamos computed
import { CommonModule } from '@angular/common';
import { CoffeeShopsService } from '../../core/services/coffee-shops.service';
import { CoffeeShop } from '../../core/models/coffee-shop.model';
import { SearchBar } from '../../shared/search-bar/search-bar.component';
import { GeolocationService } from '../../core/services/geolocation.service';
import { SpecialCoffee } from '../../shared/special-coffee/special-coffee.component';
import { FilterCategory } from '../../shared/filter-category/filter-category.component';
import { PlaceExperience } from '../../shared/place-experience/place-experience.component';
import { Baristas } from '../../shared/baristas/baristas.component';
import { Tostaduria } from '../../shared/tostaduria/tostaduria.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBar,
    SpecialCoffee,
    FilterCategory,
    PlaceExperience,
    Baristas,
    Tostaduria,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private geoService = inject(GeolocationService);
  private shopsService = inject(CoffeeShopsService);
  handleSearch(texto: string) {
    console.log('Buscando:', texto);
  }

  // --- 1. SIGNALS DE ESTADO (Datos crudos) ---
  shops = signal<CoffeeShop[]>([]);
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false); // Agregué este para controlar el estado de carga

  // --- 2. SIGNALS COMPUTADAS (Lógica de vista) ---
  // Estas se actualizan solas. Aquí vive la lógica que antes tenías en el HTML.

  // ¿Hay error?
  hasError = computed(() => this.errorMessage() !== '');

  // ¿Está vacío? (No carga, no error, y array vacío)
  isEmpty = computed(() => !this.isLoading() && !this.hasError() && this.shops().length === 0);

  // ¿Mostrar lista? (No carga, no error, y hay datos)
  showList = computed(() => !this.isLoading() && !this.hasError() && this.shops().length > 0);

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Iniciamos carga
    this.isLoading.set(true);

    this.shopsService.getShops().subscribe({
      next: (data) => {
        this.shops.set(data);
        this.isLoading.set(false); // Apagamos carga
        console.log('✅ Datos recibidos:', data);
      },
      error: (error) => {
        console.error('❌ Error:', error);
        this.errorMessage.set('No pudimos cargar las cafeterías.');
        this.isLoading.set(false); // Apagamos carga
      },
    });
  }

  // Señal para guardar la dirección del usuario y mostrarla
  userAddress = signal<string>('Detectando ubicación...');
  loadingLocation = signal<boolean>(false);

  async obtenerMiUbicacion() {
    this.loadingLocation.set(true);
    this.userAddress.set('Buscando satélites... 🛰️');

    try {
      // 1. Pedir coordenadas
      const coords = await this.geoService.getPosition();
      console.log('Mis Coordenadas:', coords);

      // 2. Traducir a texto
      const direccionTexto = await this.geoService.getAddressFromCoords(coords.lat, coords.lng);

      // 3. Guardar en la señal
      this.userAddress.set(direccionTexto);

      // AQUÍ PODRÍAS FILTRAR TU LISTA DE CAFETERÍAS POR CERCANÍA
    } catch (error) {
      this.userAddress.set('No pudimos ubicarte 📍');
      console.error(error);
      alert('Por favor activa el GPS para ver cafeterías cerca de ti.');
    } finally {
      this.loadingLocation.set(false);
    }
  }
}
