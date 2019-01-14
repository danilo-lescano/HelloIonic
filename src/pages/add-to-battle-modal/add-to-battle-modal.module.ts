import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToBattleModalPage } from './add-to-battle-modal';

@NgModule({
  declarations: [
    AddToBattleModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToBattleModalPage),
  ],
})
export class AddToBattleModalPageModule {}
