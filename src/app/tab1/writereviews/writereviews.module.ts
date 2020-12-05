import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WritereviewsPageRoutingModule } from './writereviews-routing.module';

import { WritereviewsPage } from './writereviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WritereviewsPageRoutingModule
  ],
  declarations: [WritereviewsPage]
})
export class WritereviewsPageModule {}
