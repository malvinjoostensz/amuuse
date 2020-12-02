import { Component, OnInit } from '@angular/core';
import {Ta2} from './ta2.model';
import {Tab2Service} from './tab2.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector:  'slides-example',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  tab2: Ta2[];
  slideOpts: any;
  constructor(
      private tab2Service: Tab2Service
  ) { }

  ngOnInit() {
    this.tab2 = this.tab2Service.getAllTab2();
  }
}

export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
