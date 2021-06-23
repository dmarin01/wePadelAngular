import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from '../services/profesores.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleUser: any;

  constructor(private profesorServices: ProfesoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(async (params) => {
      console.log(params);

      const detalles = await this.profesorServices.getById(params)
      console.log(detalles);

      this.detalleUser = detalles;
    })

  }

}
