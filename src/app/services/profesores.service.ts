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
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get<Profesor[]>(this.baseUrl, httpOptions).toPromise();
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
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/price/?min=${pPrecioMin}&max=${pPrecioMax}`, httpOptions).toPromise();


  }


  getById(): Promise<Profesor> {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.get<Profesor>(this.baseUrl, httpOptions).toPromise();
  }


  // devolver profesores dependiendo del nivel 
  getProfesorByNivel(pNivel: number): Promise<Profesor[]> {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/level/${pNivel}`, httpOptions).toPromise();
  }

  //devuelve el profesor si tiene instalacion para dar clase
  getProfByInstal(boolean: number): Promise<Profesor[]> {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/instalations/${boolean}`, httpOptions).toPromise();
  }

  formteacher(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/formteacher`, formValues).toPromise();
  }


  /*getProfByDesplaz(boolean): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/desplazamiento${1}`).toPromise(); //1 = true
  }
  getProfByMaterial(boolean): Promise<Profesor[]> {
    return this.httpClient.get<Profesor[]>(`${this.baseUrl}/material${true}`).toPromise();
  }*/


}


//crear array de profesores 
