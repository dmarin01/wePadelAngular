import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';


declare var Swal;

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {


  id: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public usuariosServices: UsuariosService) { }

  async ngOnInit() {
    /* const user = await this.usuariosServices.getUser()
    this.id = user.id;
   */}

  onClick() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "Te vas a desconectar",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No, continuar',
      confirmButtonText: 'Si, desconectar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Desconectado',
          '¡Hasta pronto!',
          'success'
        )
        localStorage.removeItem('token');
        this.router.navigate(['/home'])
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '¡Seguimos dentro!',
          'error'
        )
      }
    })
  }



}
