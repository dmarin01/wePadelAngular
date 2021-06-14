import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesor } from '../interface/profesor.interface'

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private baseUrl: string;
  profesores: Profesor[];

  constructor(private httpClient: HttpClient) {
    this.profesores = [{
      id: 1,
      experiencia: "12",
      precio: 15,
      material_propio: true,
      niveles: 3,
      desplazamiento: 1,
      rango_desplazamiento: 10,
      fk_clientes: 2,
    }, {
      id: 2,
      experiencia: "3",
      precio: 10,
      material_propio: false,
      niveles: 1,
      desplazamiento: 0,
      rango_desplazamiento: 30,
      fk_clientes: 1,
    }, {
      id: 3,
      experiencia: "10",
      precio: 30,
      material_propio: false,
      niveles: 4,
      desplazamiento: 1,
      rango_desplazamiento: 15,
      fk_clientes: 3,
    }, {
      id: 4,
      experiencia: "6",
      precio: 20,
      material_propio: true,
      niveles: 3,
      desplazamiento: 1,
      rango_desplazamiento: 21,
      fk_clientes: 4,
    },]

    this.baseUrl = 'http://localhost:3000';
  }
  getAll(): Promise<Profesor[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get<Profesor[]>(this.baseUrl, httpOptions).toPromise();
  }

  create(formValues) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })

    };
    return this.httpClient.post(this.baseUrl, formValues, httpOptions).toPromise();
  }
  getProfesorByPrice(pPrecio: number): Promise<Profesor[]> {
    return new Promise<Profesor[]>((resolve, reject) => {
      const arrProfesorPrice = [];
      for (let profesor of this.profesores) {
        if (profesor.precio === pPrecio) {
          arrProfesorPrice.push(profesor)
        }

      }
      resolve(arrProfesorPrice)
    })
  }
  getProfesorByInstalaciones(): Promise<Profesor[]> {
    return new Promise<Profesor[]>((resolve, reject) => {
      const arrProfesorInstalaciones = [];
      for (let profesor of this.profesores) {
        if (profesor.desplazamiento === 1) {
          arrProfesorInstalaciones.push(profesor)
        }
      }
      resolve(arrProfesorInstalaciones);
    })
  }

  getProfesorByNivel(): Promise<Profesor[]> {
    return new Promise<Profesor[]>((resolve, reject) => {
      const arrProfNivel1 = [];
      const arrProfNivel2 = [];
      const arrProfNivel3 = [];
      const arrProfNivel4 = [];
      const arrProfNivel5 = [];
      for (let profesor of this.profesores) {
        if (profesor.niveles === 1) {
          arrProfNivel1.push(profesor)
        } else if (profesor.niveles === 2) {
          arrProfNivel2.push(profesor);
        } else if (profesor.niveles === 3) {
          arrProfNivel3.push(profesor);
        } else if (profesor.niveles === 4) {
          arrProfNivel4.push(profesor);
        } else {
          arrProfNivel5.push(profesor);
        }
      }
    })

  }
}

//crear array de profesores 
