import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

declare var Swal;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {




    Swal.fire('La contraseña actualizada')
  }

}
