import { Component, input, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GalleryItem } from '../../core/models/gallery.model';

@Component({
  selector: 'image-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class ImageGalleryComponent {
  // Solo recibimos las imágenes
  items = input.required<GalleryItem[]>();

  currentIndex = signal(0);

  // Variables para lógica de Swipe
  private touchStartX = 0;
  private touchEndX = 0;

  goToIndex(index: number) {
    this.currentIndex.set(index);
  }

  // --- Lógica de Gestos Táctiles (Swipe) ---
  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const threshold = 50;
    if (this.touchEndX < this.touchStartX - threshold) {
      this.next(); // Deslizar izquierda
    }
    if (this.touchEndX > this.touchStartX + threshold) {
      this.prev(); // Deslizar derecha
    }
  }

  private next() {
    this.currentIndex.update((i) => (i < this.items().length - 1 ? i + 1 : 0));
  }

  private prev() {
    this.currentIndex.update((i) => (i > 0 ? i - 1 : this.items().length - 1));
  }
}
