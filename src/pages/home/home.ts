import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BattlePage } from '../battle/battle';
import { Localization } from './localization';
import { PartyService, IParty } from '../../services/party.service';

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
	private parties: IParty[];

	constructor(public navCtrl: NavController, private msg: Localization, private partyService: PartyService){}

	async ionViewWillEnter(){
		this.parties = await this.partyService.getParty();
	}

  	toBattlePage(){
    	this.navCtrl.push(BattlePage);
	}
}