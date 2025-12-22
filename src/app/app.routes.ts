import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { Cafeteria } from './feature/cafeteria/cafeteria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cafeteria', component: Cafeteria },
];
