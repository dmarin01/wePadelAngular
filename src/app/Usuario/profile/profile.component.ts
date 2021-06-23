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

  constructor(private usuariosService: UsuariosService, private activatedRoute: ActivatedRoute) {

    this.formulario = new FormGroup({
      id: new FormControl(),
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(25)
      ]),
      direccion: new FormControl(),
      nivel: new FormControl('', [
        Validators.required
      ]),
      telefono: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      edad: new FormControl(),
      fecha_registro: new FormControl(),
    })
  }




  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const routeID = params.id;

      this.user = await this.usuariosService.getUser();
      console.log(this.user);
      this.formulario = new FormGroup({
        id: new FormControl(this.user.id),
        username: new FormControl(this.user.username),
        nombre: new FormControl(this.user.nombre),
        apellidos: new FormControl(this.user.apellidos),
        provincia: new FormControl(this.user.provincia),
        nivel: new FormControl(this.user.nivel),
        telefono: new FormControl(this.user.telefono),
        email: new FormControl(this.user.email),
        edad: new FormControl(this.user.edad),
        fecha_registro: new FormControl(),
      })
    })



  }

  //formulario del usuario
  onSubmit() {
    console.log(this.formulario.value.id);

    Swal.fire({
      title: '¿Quieres aplicar los cambios a tu perfil?',
      showDenyButton: true,

      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardados!', '', 'success')
        await this.usuariosService.updateUser(this.formulario.value)

      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }

      window.location.reload()
    })
  }
  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }



}
