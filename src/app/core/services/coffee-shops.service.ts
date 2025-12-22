import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environments'; // Asegúrate que tu environment tenga la URL de Render
import { CoffeeShop } from '../models/coffee-shop.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeShopsService {
  private http = inject(HttpClient);

  // Apuntamos al endpoint que verificamos que funciona en el navegador
  private apiUrl = `${environment.apiUrl}/coffee-shops`;

  getShops(): Observable<CoffeeShop[]> {
    // Angular hace la petición GET y espera recibir un Array de nuestro modelo
    return this.http.get<CoffeeShop[]>(this.apiUrl);
  }
}