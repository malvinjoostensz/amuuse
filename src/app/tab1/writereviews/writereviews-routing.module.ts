import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WritereviewsPage } from './writereviews.page';

const routes: Routes = [
  {
    path: '',
    component: WritereviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WritereviewsPageRoutingModule {}
