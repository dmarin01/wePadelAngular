import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interface/cliente.interface';
import { Login } from '../interface/Login.interface';
import { Usuario } from '../interface/usuario.interface';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000';
  }

  //formulario component
  registerUser(formValues: Usuario) {
    formValues.fecha_inscripcion = new Date();
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/register`, formValues).toPromise();
  }
  loginUser(formValues: Login) {
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/login`, formValues).toPromise();
  }

  //profile component
  getUser(id): Promise<Cliente> {

    return this.httpClient.get<Cliente>(`${this.baseUrl}/api/clientes/user/${id}`).toPromise();
  }

  updateUser(formValues: Usuario) {
    return this.httpClient.put(`${this.baseUrl}/api/clientes/update`, formValues).toPromise();
  }

}
