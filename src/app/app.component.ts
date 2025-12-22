import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { Menu } from './shared/menu/menu.component';
import { StatusBar } from '@capacitor/status-bar';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, Menu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  async ngOnInit() {
    try {
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: '#0c2340' });
    } catch (e) {
      console.log('No estamos en móvil nativo');
    }
  }
}
