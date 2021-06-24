import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;
  user: Cliente;
  files;

  constructor(private usuariosService: UsuariosService) {


  }

  async ngOnInit() {



    this.user = await this.usuariosService.getUser();
    this.formulario = new FormGroup({
      id: new FormControl(this.user.id),
      username: new FormControl(this.user.username, [
        Validators.required,
        Validators.maxLength(25)
      ]),
      nombre: new FormControl(this.user.nombre, [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl(this.user.apellidos, [
        Validators.required,
        Validators.maxLength(25)
      ]),
      provincia: new FormControl(this.user.provincia),
      nivel: new FormControl(this.user.nivel, [
        Validators.required
      ]),
      telefono: new FormControl(this.user.telefono, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      edad: new FormControl(this.user.edad),
      descripcion: new FormControl(this.user.descripcion, [Validators.maxLength(850)]),
      fecha_registro: new FormControl(),
    })




  }

  //formulario del usuario
  onSubmit() {
    console.log(this.formulario.value);

    Swal.fire({
      title: '¿Quieres aplicar los cambios a tu perfil?',
      showDenyButton: true,

      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardados!', '', 'success')
        const response = await this.usuariosService.updateUser(this.formulario.value)
        console.log(response);


      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }


    })
  }
  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }



}
