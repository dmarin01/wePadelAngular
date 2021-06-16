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


    };
    return this.httpClient.post(this.baseUrl, formValues, httpOptions).toPromise();
  }

  //devolver profesores por precio
  getProfesorByPrice(pPrecioMin: number, pPrecioMax: number): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/price/?min=${pPrecioMin}&max=${pPrecioMax}`).toPromise();


  }


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

  formteacher(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/formteacher`, formValues).toPromise();
  }
}


//crear array de profesores 
