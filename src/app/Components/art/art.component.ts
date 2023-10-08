import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import * as data from "../../../assets/art.json";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  numColumns = 3;

  filter: string = 'all'

  allArt: any = (data as any).default;
  filteredArt: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    
  }

  ngOnInit() {
    this.filteredArt = this.allArt;
    this.updateScreenSizeValue(); // Initialize the value
    this.renderer.listen('window', 'resize', () => {
      this.updateScreenSizeValue();
    });
  }

  public onValChange(val: string) {
    this.filter = val;
    this.filteredArt = this.allArt
    .filter((value: any)=>{
      if(this.filter === 'all' || this.filter == value.type)
        return true;
      return false;
    });
  }

  ngOnDestroy() {
    this.renderer.destroy();
  }

  updateScreenSizeValue() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      this.numColumns = 1;
    } else if (screenWidth <= 1024) {
      this.numColumns = 2;
    } else {
      this.numColumns = 3;
    }
  }

  takeEveryNthElement<T>(array: T[], n: number, filterType: string): any[] {
    return array
      .filter((value, index, Arr)=>{
        return index % n == 0;
      });
  }

}

export class Art {
  constructor(
    public title: string,
    public desc: string,
    public url: string 
  ) { }
}
