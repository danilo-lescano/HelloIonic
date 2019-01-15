import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PartyService } from '../../services/party.service';
import { AddPartyPage } from '../add-party/add-party';

import { IParty } from '../../services/party.service';
import { ICreature } from '../../services/creature.service';

@IonicPage()
@Component({
	selector: 'page-party',
	templateUrl: 'party.html',
})
export class PartyPage {

	private parties: IParty[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private partyService: PartyService) { }

	async ionViewWillEnter() {
		this.parties = await this.partyService.getParty();
		this.parties.sort(function (a, b) {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
	}
	renderAddPartyPage(party?: IParty) {
		if (party != null)
			this.navCtrl.push(AddPartyPage, { party });
		else
			this.navCtrl.push(AddPartyPage);
	}

}
