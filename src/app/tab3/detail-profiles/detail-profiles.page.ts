import { Component, OnInit } from '@angular/core';
import {Ta3} from '../ta3.model';
import {Tab3Service} from '../tab3.service';

@Component({
  selector: 'app-detail-profiles',
  templateUrl: './detail-profiles.page.html',
  styleUrls: ['./detail-profiles.page.scss'],
})
export class DetailProfilesPage implements OnInit {
  selectTabs = 'profile';
  tab3: Ta3[];
  constructor(
      private tab3Service: Tab3Service) { }

  ngOnInit() {
    this.tab3 = this.tab3Service.getAllTab3();
  }

}
