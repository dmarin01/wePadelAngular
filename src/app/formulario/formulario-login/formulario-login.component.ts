import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      email: new FormControl('', [
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ])
    })
  }


  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuariosServices.loginUser(this.formulario.value);
    console.log(response);

    if (response['error']) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o contraseña erroneas',
        footer: '<a href="/register">¿Aún no estás registrado?</a>'
      })

    } else {
      localStorage.setItem('token', response['token']);
      this.router.navigate(['/user']);
    }
  }


}
