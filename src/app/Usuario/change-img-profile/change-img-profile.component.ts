import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-change-img-profile',
  templateUrl: './change-img-profile.component.html',
  styleUrls: ['./change-img-profile.component.css']
})
export class ChangeImgProfileComponent implements OnInit {

  formulario: FormGroup;
  files;

  constructor(private usuarioService: UsuariosService, private router: Router) {
    this.formulario = new FormGroup({
      img: new FormControl(),
    })
  }

  ngOnInit(): void {

  }


  onSubmit() {

    let fd = new FormData();


    fd.append('img', this.files[0]);



    this.usuarioService.upImg(fd).then(result => {
      console.log(result);

      this.router.navigate(['/user']);
    })

    Swal.fire('Foto de perfil actualizada')
  }

  onChange($event) {
    this.files = $event.target.files;


  }

}
