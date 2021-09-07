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
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize($event:any) { //Keep track of inner width so project boxes can be rearranged
    this.innerWidth = window.innerWidth;
  }

}
