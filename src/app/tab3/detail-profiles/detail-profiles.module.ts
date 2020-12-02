import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProfilesPageRoutingModule } from './detail-profiles-routing.module';

import { DetailProfilesPage } from './detail-profiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProfilesPageRoutingModule
  ],
  declarations: [DetailProfilesPage]
})
export class DetailProfilesPageModule {}
