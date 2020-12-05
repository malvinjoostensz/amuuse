import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  loadedprofile: Ta3;
  constructor(
      private tab3Service: Tab3Service,
      private activatedRoute: ActivatedRoute
      ) { }

  ngOnInit() {
    this.tab3 = this.tab3Service.getAllTab3();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('detail-profiles')) {return;}
      const profileid = paramMap.get('detail-profiles');
      this.loadedprofile = this.tab3Service.getTab3(profileid);
    });
  }

}
