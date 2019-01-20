import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BattlePage } from '../battle/battle';
import { Localization } from './localization';
import { PartyService, IParty } from '../../services/party.service';
import { AddPartyPage } from '../add-party/add-party';

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
	private parties: IParty[];

	constructor(public navCtrl: NavController, private msg: Localization, private partyService: PartyService, private alertCtrl: AlertController){}

	async ionViewWillEnter(){
		this.parties = await this.partyService.getParty();
	}
	promptPartyName() {
		let alert = this.alertCtrl.create({
			title: this.msg["partyName"],
			inputs: [
				{
					name: 'partyName',
					placeholder: this.msg["partyName"],
				},
			],
			buttons: [
				{
					text: this.msg["cancel"],
					role: 'cancel',
					handler: data => {}
				},
				{
					text: this.msg["ok"],
					handler: data => {
						this.newParty(data.partyName);
					}
				}
			]
		});
		alert.present();
	}
	newParty(partyName: string){
		let party: IParty = {
			id: null,
			name: partyName,
			creaturesId: []
		}
    	this.navCtrl.push(AddPartyPage, { party });
	}
  	toBattlePage(){
    	this.navCtrl.push(BattlePage);
	}
}