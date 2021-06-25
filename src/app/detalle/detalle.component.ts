import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesoresService } from '../services/profesores.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleUser;


  constructor(private profesoresServices: ProfesoresService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(async (params) => {

      const detalles = await this.profesoresServices.getById(params.id)
      this.detalleUser = detalles;
    })

  }



  getMaterial(material: number) {
    switch (material) {
      case 1: return "Si, tiene material propio";
      case 0: return " No dispongo de material"
    }
  }
  getNivel(nivel: number) {
    switch (nivel) {
      case 1: return "Básico";
      case 2: return " Iniciación";
      case 3: return "Intermedio";
      case 4: return " Avanzado";
      case 5: return "Experto";
    }
  }
  getDesplazamiento(desplazamiento: number) {
    switch (desplazamiento) {
      case 1: return "Disposición total de desplazamiento";
      case 0: return "No dispongo de forma de desplazamiento, clases en mi domicilio y/o instalación"
    }
  }

}
