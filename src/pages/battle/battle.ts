import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';

import { IParty, PartyService } from '../../services/party.service';
import { ICreature, CreatureService } from '../../services/creature.service';

@IonicPage()
@Component({
	selector: 'page-battle',
	templateUrl: 'battle.html',
})
export class BattlePage {

	private allCreatures: ICreature[];
	private allParties: IParty[];

	private battleCreatures: ICreature[] = [];
	

	constructor(public navCtrl: NavController, public navParams: NavParams, private creatureService: CreatureService, private partyService: PartyService, private modal: ModalController) {}

	async ionViewWillEnter(){
		this.allParties = await this.partyService.getParty();
		this.allCreatures = await this.creatureService.getCreature();
	}

	addCreature(){
		var creatures: ICreature[] = this.allCreatures;
		var parties: IParty[] = this.allParties;
		const modalView: Modal = this.modal.create("AddToBattleModalPage", { creatures, parties });

		modalView.present();

		modalView.onDidDismiss((creature? : ICreature[])=>{
			this.pushCreatures(creature);
		});
	}
	pushCreatures(creature? : ICreature[]){
		if(creature){
			for (let i = 0; i < this.allCreatures.length; i++)
				for (let j = 0; j < creature.length; j++)
					if(creature[j].id === this.allCreatures[i].id)
						this.battleCreatures[this.battleCreatures.length] = creature[j];
			this.sortCreatures();
		}
	}
	sortCreatures(){
		this.battleCreatures.sort(function(a, b){
			if(a.name < b.name) return -1;
			if(a.name > b.name) return 1;
			return 0;
		});
	}
}
