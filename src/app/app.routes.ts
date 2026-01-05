import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { Cafeteria } from './feature/cafeteria/cafeteria.component';
import { ListaCafeteriaComponent } from './feature/lista-cafeteria/lista-cafeteria.component';
import { BuscadorCafeteriaComponent } from './feature/buscador-cafeteria/buscador-cafeteria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cafeteria', component: Cafeteria, data: { showHeader: false } },
  { path: 'lista-cafeteria', component: ListaCafeteriaComponent },
  { path: 'buscador-cafeteria', component: BuscadorCafeteriaComponent },
];
