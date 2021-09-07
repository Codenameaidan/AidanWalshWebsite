import { Component, HostListener, OnInit } from '@angular/core';

import * as data from "../../../assets/stories.json";

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit {

  stories: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
    doSomething() {
      console.debug("Scroll Event", window.pageYOffset );
      this.scrollY = window.pageYOffset;
    }

  scrollY: number = 0;
scrollToTarget(): void{
    const target = document.getElementById("target");
    if(target)
      target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
