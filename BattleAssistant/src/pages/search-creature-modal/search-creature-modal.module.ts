import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCreatureModalPage } from './search-creature-modal';

@NgModule({
  declarations: [
    SearchCreatureModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCreatureModalPage),
  ],
})
export class SearchCreatureModalPageModule {}
