import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncounterPage } from './encounter';

@NgModule({
  declarations: [
    EncounterPage,
  ],
  imports: [
    IonicPageModule.forChild(EncounterPage),
  ],
})
export class EncounterPageModule {}
