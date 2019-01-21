import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreaturePage } from './creature';

@NgModule({
  declarations: [
    CreaturePage,
  ],
  imports: [
    IonicPageModule.forChild(CreaturePage),
  ],
})
export class CreaturePageModule {}
