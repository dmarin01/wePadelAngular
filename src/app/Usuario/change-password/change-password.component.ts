import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuarioService: UsuariosService, private router: Router) {
    this.formulario = new FormGroup({
      password1: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ])
    }, [this.passwordValidator])
  }

  ngOnInit(): void {

  }
  passwordValidator(form) {
    const passwordValue = form.get('password1').value;
    const passwordRepeat = form.get('password2').value;
    if ((passwordValue !== passwordRepeat) && (form.get('password2').dirty)) {
      return ({ passwordvalidator: true })
    } else {
      return null
    }
  }

  onSubmit() {
    this.usuarioService.changePass(this.formulario.value)

      .then(result => {
        console.log(result);

        this.router.navigate(['/user'])

      })
    Swal.fire('La contraseña actualizada')
  }


}

