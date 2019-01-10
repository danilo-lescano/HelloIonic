import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BattlePage } from '../battle/battle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  toBattlePage(){
    this.navCtrl.push(BattlePage);
  }
}
