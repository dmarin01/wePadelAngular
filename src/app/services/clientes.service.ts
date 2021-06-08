import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interface/cliente.interface';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://localhost:3000/api/clientes';
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
