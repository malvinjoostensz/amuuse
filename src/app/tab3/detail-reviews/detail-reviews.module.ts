import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailReviewsPageRoutingModule } from './detail-reviews-routing.module';

import { DetailReviewsPage } from './detail-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailReviewsPageRoutingModule
  ],
  declarations: [DetailReviewsPage]
})
export class DetailReviewsPageModule {}
