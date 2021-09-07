import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as data from "../../../assets/projects.json";


@Component({
  selector: 'app-csprojects',
  templateUrl: './csprojects.component.html',
  styleUrls: ['./csprojects.component.scss']
})
export class CsprojectsComponent implements OnInit {

  projects: any = (data as any).default;

  public innerWidth: number = 0;

  math = Math;

  constructor(public router : Router ) { }

  ngOnInit(): void {
    //alert(this.router.url.split('/')[1]);
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize($event:any) {
    this.innerWidth = window.innerWidth;
    console.log(Math.floor(this.innerWidth));
  }

}
