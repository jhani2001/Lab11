import { Component } from '@angular/core';
import { MarkerProperties } from 'src/app/services/marker.interface';
import { MarkerService } from 'src/app/services/marker.service';




@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent {

  center: google.maps.LatLngLiteral = { lat: -12.03581, lng: -76.958392 };
  zoom = 15;

  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    mapTypeControl: false
  };

  constructor(private _markerService: MarkerService) {

  }


  handleMapInitialized(map: google.maps.Map) {
    this._markerService.getMarkers().forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map,
      })
    });
  }

  verTiendas(distrito: string) {
    switch (distrito) {
      case 'Santa Anita':
        this.moverVista(-12.04319003602788, -76.97097931011356);
        break;
      case 'San Miguel':
        this.moverVista(-12.07742055261083, -77.09429652650414);
        break;
      case 'San Isidro':
        this.moverVista(-12.094960118659426, -77.03910916382365);
        break;
    }
  }

  moverVista(lat: number, lng: number): void {
    this.center = { lat, lng };
  }

  agregarMarker(marker: MarkerProperties){

  }

}
