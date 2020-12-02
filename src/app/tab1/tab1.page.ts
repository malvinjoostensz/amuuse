import { Component, OnInit } from '@angular/core';
import {Ta1} from './ta1.model';
import {Tab1Service} from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  tab1: Ta1[];
  constructor(
    private tab1Service: Tab1Service
  ) { }

  ngOnInit() {
    this.tab1 = this.tab1Service.getAllTab1();
  }
}
