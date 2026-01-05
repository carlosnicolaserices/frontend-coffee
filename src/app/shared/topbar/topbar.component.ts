import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html', // <--- Apunta al archivo HTML
  styleUrl: './topbar.component.scss', // <--- Apunta al archivo SCSS
})
export class TopbarComponent {
  // Variable de estado
  isScrolled: boolean = false;

  // Escuchamos el evento de scroll globalmente
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si bajamos más de 20px, activamos la sombra
    this.isScrolled = window.scrollY > 20;
  }
}
