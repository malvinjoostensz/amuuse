import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmuusesPage } from './amuuses.page';

const routes: Routes = [
  {
    path: '',
    component: AmuusesPage
  },
  {
    path: 'logins',
    loadChildren: () => import('./logins/logins.module').then( m => m.LoginsPageModule)
  },
  {
    path: 'signups',
    loadChildren: () => import('./signups/signups.module').then( m => m.SignupsPageModule)
  },
  {
    path: 'helps',
    loadChildren: () => import('./helps/helps.module').then( m => m.HelpsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'abouts',
    loadChildren: () => import('./abouts/abouts.module').then( m => m.AboutsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmuusesPageRoutingModule {}
