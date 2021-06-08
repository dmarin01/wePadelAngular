import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interface/cliente.interface';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:4200';
  }

  //formulario
  registerUser(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, formValues).toPromise();
  }
  loginUser(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
  }


  //peticion post images
  upLoadPhoto(idCliente: Cliente) {
    return this.httpClient.post<Cliente>(`${this.baseUrl}upload=`, idCliente).toPromise();
  }

  getAll(pPage = 1, pLimit = 20): Promise<Cliente[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    }
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}?limit=${pLimit}&page=${pPage}`, httpOptions).toPromise();
  }

  createUser(pCliente: Cliente) {
    return this.httpClient.post<Cliente[]>(this.baseUrl, pCliente).toPromise()
  }



  updateClient(pCliente) {
    return this.httpClient.post<Cliente[]>(this.baseUrl, pCliente).toPromise()
  }



  deteleClient(idCliente) {
    return this.httpClient.get<Cliente>(`${this.baseUrl}delete=`, idCliente).toPromise();

  }
}
