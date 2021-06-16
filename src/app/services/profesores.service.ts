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


    this.baseUrl = 'http://localhost:3000/api/profesores';
  }
  //devolver todos los profesores
  getAll(): Promise<Profesor[]> {
    //const httpOptions = {
    //headers: new HttpHeaders({
    //authorization: localStorage.getItem('token')
    //})
    //};
    return this.httpClient.get<Profesor[]>(this.baseUrl).toPromise();
  }

  //crear un profesor

  create(formValues) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })

      /**{
    "experiencia": 9,
    "precio": 35,
    "material_propio": 1,
    "niveles": 5,
    "desplazamiento":1,
    "rango_desplazamiento":30,
    "nombre": "Fernando",
    "apellidos":"Alonso Ruiz",
    "email":"FernandoAlonso@gmail.com",
    "direccion":"Calle Renault, 23",
    "telefono": 673429509
} */

    };
    return this.httpClient.post(this.baseUrl, formValues, httpOptions).toPromise();
  }

  //devolver profesores por precio
  getProfesorByPrice(pPrecioMin: number, pPrecioMax: number): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/price/?min=${pPrecioMin}&max=${pPrecioMax}`).toPromise();


  }

  //devolver profesores por instalaciones 1 or 0
  /**  getProfesorByInstalaciones(): Promise<Profesor[]> {
     return new Promise<Profesor[]>((resolve, reject) => {
       const arrProfesorInstalaciones = [];
       for (let profesor of this.profesores) {
         if (profesor.desplazamiento === 1) {
           arrProfesorInstalaciones.push(profesor)
         }
       }
       resolve(arrProfesorInstalaciones);
     })
   }*/

  getById(pId: number): Promise<Profesor> {
    return this.httpClient.get<Profesor>(`${this.baseUrl}/${pId}`).toPromise();
  }


  // devolver profesores dependiendo del nivel 
  getProfesorByNivel(pNivel): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/level/?min=${pNivel}`).toPromise();
  }

  getProfByInstal(boolean): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/instalaciones${1}`).toPromise(); //1 = true
  }
  /*getProfByDesplaz(boolean): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/desplazamiento${1}`).toPromise(); //1 = true
  }
  getProfByMaterial(boolean): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/material${true}`).toPromise();
  }*/
}


//crear array de profesores 
