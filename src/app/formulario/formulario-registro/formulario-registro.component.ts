import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      nombre: new FormControl(),
      apellidos: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      telefono: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  async onSubmit() {
    // this.formulario.value
    console.log(this.formulario.value);

    try {
      const response = await this.usuariosService.registerUser(this.formulario.value);

      console.log(response);

      if (response['affectedRows'] === 1) {
        Swal.fire('Te has registrado correctamente');
        this.formulario.reset();
        // REDIRIGIR A LA PAGINA DE USER/ID 
        this.router.navigate(['/user', response['insertId']])

      }

      if (response['error']) {
        Swal.fire('Ha ocurrido un error', response['error'], 'error')
      }
    } catch (err) {
      console.log(err);

    }

  }


}

