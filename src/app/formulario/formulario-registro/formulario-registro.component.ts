import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {

    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    // this.formulario.value
    this.usuariosService.registerUser(this.formulario.value)
      .then(response => {
        console.log(response);

        if (response['affectedRows'] === 1) {
          Swal.fire('Registro completado con éxito');
          this.formulario.reset();
        }

        if (response['error']) {
          Swal.fire(
            'Error registro!',
            response['error'],
            'error'
          )
        }

      })
      .catch(error => console.log(error));
  }


}

