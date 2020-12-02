import { Component, OnInit } from '@angular/core';
import {About} from './about.model';
import {AboutsService} from './abouts.service';
import {ModalController} from '@ionic/angular';
import {ModaleditComponent} from '../components/modaledit/modaledit.component';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.page.html',
  styleUrls: ['./abouts.page.scss'],
})
export class AboutsPage implements OnInit {
  abouts: About[];
  constructor(
      private aboutsService: AboutsService,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.abouts = this.aboutsService.getAllAbouts();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModaleditComponent,
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });
    return await modal.present();
  }

}
