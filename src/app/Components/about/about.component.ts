import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  slides = [{'image': 'assets'}, {'image': 'assets/CSProjectsIcon.png'}];
  //slides = [{'image': 'assets'}, {'image': '/assets/RupertsBody.jpg'},{'image': '/assets/CSProjectsIcon.png'}, {'image': '/assets/CSProjectsIcon.png'}, {'image': '/assets/CSProjectsIcon.png'}];

  constructor() { }

  ngOnInit(): void {
    
  }

}
