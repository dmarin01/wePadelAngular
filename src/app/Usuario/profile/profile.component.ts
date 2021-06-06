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
  arrImg: any = [];
  loading: boolean;

  constructor(private usuariosService: UsuariosService) {

    this.formulario = new FormGroup({
      username: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      fecha_registro: new FormControl(),
      telefono: new FormControl(),
    })
  }

  //indicar la base de la ur


  ngOnInit(): void {
  }

  //formulario del usuario
  onSubmit() {

  }
  //onclick para subir la imagen
  capturarFile(event) {

    const imgInsert = event.target.files[0];
    this.arrImg.push(imgInsert);
  }

  onClick(): any {

    try {
      this.loading = true;
      const formularioImg = new FormData();
      this.arrImg.forEach(img => {
        formularioImg.append('foto', img)
      })

      //crear el servicio post para el servidor
      this.usuariosService.post('http://localhost:3000/upload', formularioImg)
        .suscribe(res => {
          this.loading = false;
          console.log('esperando al servidor', res)
        })

    } catch (event) {
      this.loading = false;
      console.log('Error de carga', event)
    }
  }
}


