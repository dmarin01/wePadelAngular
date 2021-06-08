

///<reference path="../../../node_modules/@types/googlemaps/index.d.ts"

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  @ViewChild('divMap') divMap: ElementRef;
  mapa: google.maps.Map;

  latitud: number;
  longitud: number;

  constructor() {
    this.latitud = 40;
    this.longitud = -3;


  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //vamos a geolocalizarnos
    if (navigator.geolocation) {//=true
      navigator.geolocation.getCurrentPosition(position => { //nos indica el lugar en donde está y a través de un callback vamos a rescatar la longuitud y latitud.
        this.cargarMapa(position);

      })
    } else {
      console.log('Navegador no compatible');
    }

  }
  cargarMapa(position) {
    const opciones = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    this.mapa = new google.maps.Map(this.divMap.nativeElement, opciones);
    const markerPosition = new google.maps.Marker({
      position: this.mapa.getCenter()
    });
    markerPosition.setMap(this.mapa);
  }

}

