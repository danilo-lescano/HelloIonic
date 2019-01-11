import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMonsterPage } from './add-monster';

@NgModule({
  declarations: [
    AddMonsterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMonsterPage),
  ],
})
export class AddMonsterPageModule {}
