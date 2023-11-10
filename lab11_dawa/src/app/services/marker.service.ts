import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { MarkerProperties } from './marker.interface';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

  constructor() { }

  markers: MarkerProperties[] = [
    {
      position: { lat: -12.0491625, lng: -76.9554737 },
      label: { color: 'black', text: 'Tienda N°25', fontSize: '20px', fontWeight: 'bold' },
      title: 'Santa Anita',
      info: 'ciudad de los reyes'
    }, // Tecsup
    {
      position: { lat: -12.0331625, lng: -76.9554737 },
      label: { color: 'black', text: 'Tienda N°2', fontSize: '20px', fontWeight: 'bold' },
      title: 'Santa Anita',
      info: 'ciudad de los reyes'
    }, // Tecsup }, // Louvre Museum
    {
      position: { lat: -12.0331625, lng: -76.9689937 },
      label: { color: 'black', text: 'Tienda N°3', fontSize: '20px', fontWeight: 'bold' },
      title: 'Santa Anita',
      info: 'ciudad de los reyes'
    }, // Tecsup }, // Cathédrale Notre-Dame de Paris
  ];

  getMarkers(): MarkerProperties[] {
    return this.markers;
  }

  addMarker(marker: MarkerProperties): void {
    this.markers.push(marker);
  }

}
