import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usuariosServices: UsuariosService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }


  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuariosServices.loginUser(this.formulario.value);
    console.log(response);

    if (response['error']) {
      Swal.fire('Error de login', response['error'], 'error');
      console.log(response);

    } else {
      Swal.fire('Login Correcto', 'Ya puedes disfrutar de la aplicación', 'success');
      console.log(response);

      localStorage.setItem('token', response['token']);
      this.router.navigate['/register'];

    }
  }


}
