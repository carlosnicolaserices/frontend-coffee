import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importante para routerLink
import { ImageGalleryComponent } from '../../shared/gallery/gallery.component';

@Component({
  selector: 'cafeteria',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageGalleryComponent],
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.scss',
})
export class Cafeteria {
  // Estado del mapa
  isMapOpen = signal(false);

  // DATA DE LA CAFETERÍA (Simulando respuesta de BD)
  cafeteriaInfo = {
    name: 'CAFETERIA PAPAFITA',
    address: "O'Higgins 500, Concepción, Biobío",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta recusandae sapiente placeat dolorum explicabo officiis minima odit amet.',
    logo: '../../assets/4.jpeg',
    coords: { lat: -36.8, lng: -73.0 }, // Ejemplo
  };

  galleryImages = [
    { id: 1, src: '../../../assets/banner1.png', alt: 'Café de especialidad' },
    { id: 2, src: '../../../assets/banner2.png', alt: 'Ambiente relajado' },
    { id: 3, src: '../../../assets/banner3.png', alt: 'Postres artesanales' },
  ];

  // Etiquetas de negocio
  badges = [
    'Tostaduría',
    'Pastelería',
    'Chocolatería',
    'Panadería',
    'Heladería',
    'Restaurant',
    'Bar',
    'Cafetería',
  ];

  // Iconos de infraestructura
  amenities = [
    { icon: 'wifi', label: 'Wifi' },
    { icon: 'pet_supplies', label: 'Pet Friendly' },
    { icon: 'deck', label: 'Terraza' },
    { icon: 'ac_unit', label: 'A/C' }, // Ejemplo corregido
    { icon: 'accessible', label: 'Accesible' },
  ];

  // Servicios extras (Pills)
  services = ['Música en vivo', 'Bingo', 'Reservas', 'Programa fidelidad', 'Expo arte'];

  // Datos del horario basados en tu imagen
  schedule = [
    { day: 'Lunes', hours: '09:00 - 18:00', isOpen: true },
    { day: 'Martes', hours: '09:00 - 18:00', isOpen: false }, // Caso especial: Horas en rojo
    { day: 'Miércoles', hours: '09:00 - 18:00', isOpen: true },
    { day: 'Jueves', hours: '09:00 - 18:00', isOpen: true },
    { day: 'Viernes', hours: '09:00 - 18:00', isOpen: true },
    { day: 'Sábado', hours: '10:00 - 15:00', isOpen: true },
    { day: 'Domingo', hours: 'Cerrado', isOpen: false },
  ];

  // --- MÉTODOS ---
  openMap() {
    this.isMapOpen.set(true);
  }
  closeMap() {
    this.isMapOpen.set(false);
  }
}
