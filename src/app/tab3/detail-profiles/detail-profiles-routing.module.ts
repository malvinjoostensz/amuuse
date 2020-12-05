import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProfilesPage } from './detail-profiles.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProfilesPageRoutingModule {}
