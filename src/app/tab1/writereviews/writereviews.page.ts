import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-writereviews',
  templateUrl: './writereviews.page.html',
  styleUrls: ['./writereviews.page.scss'],
})
export class WritereviewsPage implements OnInit {

  constructor(
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onSave() {
    this.modalCtrl.dismiss();
  }
}
