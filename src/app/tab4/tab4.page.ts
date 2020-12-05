import { Component, OnInit } from '@angular/core';
import {Ta4} from './ta4.model';
import {Tab4Service} from './tab4.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  tab4: Ta4[];
  constructor(
      private tab4Service: Tab4Service
  ) { }

  ngOnInit() {
    this.tab4 = this.tab4Service.getAllTab4();
  }
}
