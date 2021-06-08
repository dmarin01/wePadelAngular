import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var Swal;

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usuariosServices: UsuariosService) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }


  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuariosServices.loginUser(this.formulario.value);
    if (response['error']) {
      Swal.fire('Error de login', response['error'], 'error');
    } else {
      Swal.fire('Login Correcto', 'Ya puedes disfrutar de la aplicación', 'success');
      localStorage.setItem('token', response['token']);
    }
  }


}
