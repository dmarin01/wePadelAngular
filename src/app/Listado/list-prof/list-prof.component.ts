import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.css']
})
export class ListProfComponent implements OnInit {
  precio: number;
  isViewPrecio: boolean;
  constructor() {
    this.precio = 0;
    this.isViewPrecio = false;
  }

  ngOnInit(): void {
  }
  onInput($event) {
    console.log(this.precio);
  }
  viewPrecio() {
    this.isViewPrecio = !this.isViewPrecio;
  }

}
