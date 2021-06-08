import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interface/cliente.interface'

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
}
