import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BattlePage } from '../battle/battle';
import { Localization } from './localization';

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController, private msg: Localization){
		console.log(msg.x);
	}

  	toBattlePage(){
    	this.navCtrl.push(BattlePage);
	}
}