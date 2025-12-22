import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor() {}

  /**
   * 1. Obtiene las coordenadas GPS del dispositivo (Latitud, Longitud)
   */
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocalización no soportada por este navegador.');
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          reject('Permiso denegado o error de ubicación: ' + err.message);
        },
        { enableHighAccuracy: true, timeout: 5000 } // Opciones de precisión
      );
    });
  }

  /**
   * 2. Traduce Lat/Lng a Dirección Texto usando OpenStreetMap (Nominatim API)
   * ¡Es Gratis! (Pero respeta sus límites de uso, no abuses con miles de peticiones)
   */
  async getAddressFromCoords(lat: number, lng: number): Promise<string> {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
      const response = await fetch(url);
      const data = await response.json();

      // Nominatim devuelve un objeto complejo, tomamos la dirección formateada o construimos una
      // data.display_name suele ser muy largo, intentemos hacerlo corto:
      const calle = data.address.road || '';
      const numero = data.address.house_number || '';
      const barrio = data.address.neighbourhood || data.address.suburb || '';

      // Si no encuentra calle, devolvemos el nombre genérico
      if (!calle) return data.display_name;

      return `${calle} ${numero}, ${barrio}`; // Ej: "Av. O'Higgins 500, Centro"
    } catch (error) {
      console.error('Error al obtener dirección:', error);
      return 'Ubicación desconocida';
    }
  }
}
