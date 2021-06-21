import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { FormControl, FormGroup } from '@angular/forms';
>>>>>>> develop
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuarioService: UsuariosService) {
    this.formulario = new FormGroup({
      password1: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ])
    })
  }

  ngOnInit(): void {

  }
  passwordValidator(form) {
    const passwordValue = form.get('password1').value;
    const passwordRepeat = form.get('password2').value;
    if (passwordValue === passwordRepeat) {
      return null
    } else {
      return ({ passwordvalidator: true })
    }
  }

  async onSubmit() {

    Swal.fire('La contraseña actualizada')
  }


}

