import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ta2 } from '../ta2.model';
import { Tab2Service } from '../tab2.service';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.page.html',
  styleUrls: ['./detail-profile.page.scss'],
})
export class DetailProfilePage implements OnInit {

  selectTabs = 'profile';
  loadedprofile2: Ta2;
  constructor(private tab2Service: Tab2Service,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('detail-profile')) {return;}
      const profileid = paramMap.get('detail-profile');
      this.loadedprofile2 = this.tab2Service.getTab2(profileid);
    });
  }

}
