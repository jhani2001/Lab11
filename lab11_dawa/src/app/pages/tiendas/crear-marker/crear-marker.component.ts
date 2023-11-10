import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkerProperties } from 'src/app/services/marker.interface';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-crear-marker',
  templateUrl: './crear-marker.component.html',
  styleUrls: ['./crear-marker.component.css']
})


export class CrearMarkerComponent {
  markerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _markerService: MarkerService){
    this.markerForm = this.fb.group({
        lat:  ['', Validators.required],
        lng: ['', Validators.required],
        distrito: ['', Validators.required],
        name:    ['', Validators.required]
    })
  }

  agregarMarker(){
    const marker: MarkerProperties = {
      position: {
        lat: this.markerForm.get('lat')?.value,
        lng: this.markerForm.get('lng')?.value
      },
      label: {
        color: 'Black',
        text: this.markerForm.get('name')?.value,
        fontSize: '20px',
        fontWeight: 'bold'
      },
      title: this.markerForm.get('distrito')?.value,
      info: 'Lima'
    } 

    this._markerService.addMarker(marker)

  }
}
