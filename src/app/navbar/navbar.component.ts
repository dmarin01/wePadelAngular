import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  initsession: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    this.initsession = false;
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.initsession = (url[0].path === 'login') ? false : true;

    })
  }

}
