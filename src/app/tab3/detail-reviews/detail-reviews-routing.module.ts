import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailReviewsPage } from './detail-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: DetailReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailReviewsPageRoutingModule {}
