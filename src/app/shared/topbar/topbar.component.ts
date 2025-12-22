import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html', // <--- Apunta al archivo HTML
  styleUrl: './topbar.component.scss'     // <--- Apunta al archivo SCSS
})
export class TopbarComponent {
  // Aquí pondremos la lógica del usuario más adelante
}