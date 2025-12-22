import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from '../../shared/gallery/gallery.component';
@Component({
  selector: 'cafeteria',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent],
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.scss',
})
export class Cafeteria {
  galleryImages = [
    {
      id: 1,
      src: '../../../assets/banner1.png', // Asegúrate que estas imágenes existan en tu carpeta assets
      alt: 'Café de especialidad',
    },
    {
      id: 2,
      src: '../../../assets/banner2.png',
      alt: 'Ambiente relajado',
    },
    {
      id: 3,
      src: '../../../assets/banner3.png',
      alt: 'Postres artesanales',
    },
  ];
}
