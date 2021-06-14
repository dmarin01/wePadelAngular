import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.css']
})
export class ListProfComponent implements OnInit {
  precio: number;
  isViewPrecio: boolean;
  nivel: string;

  isViewNivel: boolean;
  instalaciones: boolean;
  isViewInstalaciones: boolean;

  precioSeleccionado: number;
  nivelSeleccionado: string;
  instalacionesSeleccionada: boolean;

  arrPrecio: any[];
  arrNivel: any[];
  arrInstalaciones: any[];


  constructor() {
    this.precio = 0;
    this.isViewPrecio = false;
    this.nivel = '';


    this.isViewNivel = false;
    this.instalaciones = false;
    this.isViewInstalaciones = false;

    this.precioSeleccionado = 0;
    this.nivelSeleccionado = "";
    this.instalacionesSeleccionada = true;

  }

  ngOnInit(): void {
  }
  //Eventos
  onInput($event) {
    this.precioSeleccionado = this.precio;
  }
  onInputNivel($event) {
    this.nivelSeleccionado = this.nivel;
    console.log(this.nivelSeleccionado);
  }
  onInputInstalaciones($event) {
    this.instalacionesSeleccionada = this.instalaciones
    console.log(this.instalacionesSeleccionada);
  }


  //aparezca por pantalla
  viewSection($event) {
    this.isViewPrecio = ($event.target.dataset.filter === "1") ? !this.isViewPrecio : false;
    this.isViewNivel = ($event.target.dataset.filter === "2") ? !this.isViewNivel : false;
    this.isViewInstalaciones = ($event.target.dataset.filter === "3") ? !this.isViewInstalaciones : false;


    console.log($event.target.dataset.filter);
  }

}
