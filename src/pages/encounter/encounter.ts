import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController, IonicPage } from 'ionic-angular';
import { PartyService, IParty } from '../../services/party.service';
import { AddPartyPage } from '../add-party/add-party';
import { Localization } from './localization';

@IonicPage()
@Component({
	selector: 'page-encounter',
	templateUrl: 'encounter.html',
})
export class EncounterPage {
	private parties: IParty[] = [];

	constructor(private navCtrl: NavController, private msg: Localization, private partyService: PartyService, private alertCtrl: AlertController){}

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
		this.renderAddPartyPage({
			id: null,
			name: partyName,
			isEncounter: true,
			creaturesId: []
		});
	}
	renderAddPartyPage(party: IParty) {
		this.navCtrl.push(AddPartyPage, { party });
	}
}
