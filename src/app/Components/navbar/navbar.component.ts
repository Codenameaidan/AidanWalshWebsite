import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router : Router ) { }
  mobile:boolean = false;
  menu_on:boolean = false;

  ngOnInit(): void {
      //alert(window.screen.width);
      if (window.screen.width <= 520) { // 768px portrait
        this.mobile = true;
      }
  }

  toggle_menu(): void{
    this.menu_on = !this.menu_on;
  }

}
