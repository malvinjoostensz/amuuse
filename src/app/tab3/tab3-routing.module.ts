import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'detail-profiles',
    loadChildren: () => import('./detail-profiles/detail-profiles.module').then( m => m.DetailProfilesPageModule)
  },
  {
    path: 'detail-reviews',
    loadChildren: () => import('./detail-reviews/detail-reviews.module').then( m => m.DetailReviewsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
