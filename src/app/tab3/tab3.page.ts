import { Component, OnInit } from '@angular/core';
import {Ta3} from './ta3.model';
import {Tab3Service} from './tab3.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  tab3: Ta3[];
  constructor(
      private tab3Service: Tab3Service
  ) { }

  ngOnInit() {
    this.tab3 = this.tab3Service.getAllTab3();
  }
}
