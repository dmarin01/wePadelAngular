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
  getUser(): Promise<Cliente> {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.get<Cliente>(`${this.baseUrl}/api/clientes/user/`, httpOptions).toPromise();
  }

  updateUser(formValues: Cliente) {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.put(`${this.baseUrl}/api/clientes/update`, formValues, httpOptions).toPromise();
  }

  upImg(fd: FormData) {

    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.put(`${this.baseUrl}/api/clientes/upimg`, fd, httpOptions).toPromise();
  }


  //función ocultar botones nav
  isloged() {
    if (localStorage.getItem('token') === null) {
      return false;
    } else {
      return true;
    }
  }

  changePass(formValue) {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token') })
    }
    return this.httpClient.put(`${this.baseUrl}/api/clientes/changepw`, formValue, httpOptions).toPromise()
  }

}
