import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { BattlePage } from '../battle/battle';
import { Localization } from './localization';
import { PartyService, IParty } from '../../services/party.service';
import { AddPartyPage } from '../add-party/add-party';
import { NewpartyPopoverComponent } from '../../components/newparty-popover/newparty-popover';

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
	private parties: IParty[] = [];

	private flagPopover: boolean = true;

	constructor(public navCtrl: NavController, private msg: Localization, private partyService: PartyService, private alertCtrl: AlertController, private popoverCtrl: PopoverController){}

	async ionViewWillEnter(){
		this.parties = await this.partyService.getParty();
		this.checkForParties();
	}
	checkForParties(){
		if(!this.parties || this.parties.length < 1){
			var e1 = document.createEvent('MouseEvents');
			e1.initEvent('mousedown', true, true);
			document.getElementById("popover1").dispatchEvent(e1);
			document.getElementById("popover1").click();
		}
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
			creaturesId: []
		});
	}
	renderAddPartyPage(party: IParty) {
		this.navCtrl.push(AddPartyPage, { party });
	}
	presentNumberPopover(event) {
		let popover;
		if(!this.parties || this.parties.length < 1 && this.flagPopover){
			this.flagPopover = false;
			popover = this.popoverCtrl.create(NewpartyPopoverComponent);
			popover.present({ ev: event });
		}
		event.stopPropagation();
		return false;
	}
  	toBattlePage(party: IParty){

    	this.navCtrl.push(BattlePage);
	}
}