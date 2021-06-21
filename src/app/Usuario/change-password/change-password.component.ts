import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuarioServices: UsuariosService) {
    this.formulario = new FormGroup({
      password1: new FormControl(),
      password2: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {



    Swal.fire('La contraseña actualizada')
  }

}
