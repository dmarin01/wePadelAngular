import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { Profesor } from 'src/app/interface/profesor.interface';
import { ProfesoresService } from '../../services/profesores.service';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.css']
})
export class ListProfComponent implements OnInit {
  formulario: FormGroup;

  precioMin: number;
  precioMax: number;
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

  arrProfesores: Profesor[];


  constructor(private profesoresService: ProfesoresService) {
    this.precioMin = 0;
    this.precioMax = 0;
    this.isViewPrecio = false;
    this.nivel = '';


    this.isViewNivel = false;
    this.instalaciones = false;
    this.isViewInstalaciones = false;

    this.precioSeleccionado = 0;
    this.nivelSeleccionado = "";
    this.instalacionesSeleccionada = true;

    this.arrProfesores = [];

    this.formulario = new FormGroup({

    })


  }


  ngOnInit(): void {
    //listado de todos los profesores
    this.profesoresService.getAll()
      .then(response => {
        console.log(response)
        this.arrProfesores = response;
      })
      .catch(error => console.log(error));




  }

  //Eventos




  //aparezca por pantalla
  viewSection($event) {
    this.isViewPrecio = ($event.target.dataset.filter === "1") ? !this.isViewPrecio : false;
    this.isViewNivel = ($event.target.dataset.filter === "2") ? !this.isViewNivel : false;
    this.isViewInstalaciones = ($event.target.dataset.filter === "3") ? !this.isViewInstalaciones : false;


    console.log($event.target.dataset.filter);
  }


  async onClick(profesorId) {
    return await this.profesoresService.getById(profesorId);

  } catch(error) {
    console.log(error);
  }



  async onClickPrecio() {
    this.arrProfesores = await this.profesoresService.getProfesorByPrice(this.precioMin, this.precioMax)
  }

  async onInputNivel($event) {
    this.arrProfesores = await this.profesoresService.getProfesorByNivel($event.target.value)
  }

  async onInputInstalaciones($event) {

    this.arrProfesores = await this.profesoresService.getProfByInstal($event.target.value);
  }
  //peticion get por nivel






  /*this.profesoresService.getProfesorByNivel(hola, pepe)
  .then(response => {
    this.arrProfesores
  })


//Peticion Get por instalaciones
this.profesoresService.getProfByInstal(true)
  .then(response => {
    this.arrProfesores = response;
  })
  .catch(error => console.log(error));

//peticion get por precio

this.profesoresService.getProfesorByPrice(pPrecioMin, pPrecioMax)
  .then(response => {
    console.log(response)
    this.arrProfesores = response;
  })
  .catch(error => console.log(error));*/



}
