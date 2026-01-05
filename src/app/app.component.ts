import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { Menu } from './shared/menu/menu.component';
import { StatusBar } from '@capacitor/status-bar';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, Menu, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App implements OnInit {
  // 1. Creamos un Signal para controlar la visibilidad (Por defecto true)
  showHeader = signal<boolean>(true);
  // 1. Signal para controlar el estado
  isCafeteriaRoute = signal<boolean>(false);

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // 2. Nos suscribimos a los eventos de navegación
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd), // Solo cuando termina de navegar
        map(() => {
          // Truco de Arquitecto: Hay que buscar la ruta "hija" activa real
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          // Devolvemos la data de esa ruta
          return child?.snapshot.data['showHeader'];
        })
      )
      .subscribe((shouldShow) => {
        // 3. Actualizamos el Signal
        // Si 'shouldShow' es undefined (no pusimos data), asumimos que es TRUE (visible)
        this.showHeader.set(shouldShow !== false);
      });

    // evento para cuando cambia la ruta
    // 2. Escuchamos cada vez que termina la navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // 3. Verificamos la URL
        // Si la URL incluye '/cafeteria', la señal se vuelve TRUE
        const currentUrl = event.urlAfterRedirects || event.url;
        this.isCafeteriaRoute.set(currentUrl.includes('/cafeteria'));
      });
  }
}
