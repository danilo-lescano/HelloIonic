import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCreaturePage } from './add-creature';

@NgModule({
  declarations: [
    AddCreaturePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCreaturePage),
  ],
})
export class AddCreaturePageModule {}
