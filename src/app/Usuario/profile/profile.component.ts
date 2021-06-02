import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;
  constructor(private usuariosService: UsuariosService) {

    this.formulario = new FormGroup({
      username: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      fecha_registro: new FormControl(),
      telefono: new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {

  }

  onClick() {

  }
}
