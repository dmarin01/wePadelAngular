import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService, private router: Router) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.maxLength(13)
      ])
    });
  }

  ngOnInit(): void {
  }
  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched
  }

  passwordRepeatValidator(form) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('repite_password').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      return { passwordrepeatvalidator: true };
    }
  }
  async onSubmit() {
    // this.formulario.value
    console.log(this.formulario.value.id);

    try {
      const response = await this.usuariosService.registerUser(this.formulario.value);

      console.log(response);

      if (response['affectedRows'] === 1) {
        Swal.fire('Te has registrado correctamente');
        this.formulario.reset();
        // REDIRIGIR A LA PAGINA DE USER/ID 
        this.router.navigate(['/user'])

      }

      if (response['error']) {
        Swal.fire('Ha ocurrido un error', response['error'], 'error')
      }
    } catch (err) {
      console.log(err);

    }

  }


}

