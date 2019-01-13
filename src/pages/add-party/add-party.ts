import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CreatureService } from '../../services/creature.service';
import { PartyService } from '../../services/party.service';

export interface ICreature {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}
export interface IParty {/* PARTYYYYY o// \o/ \\o */
	id: number;
	name: string;
	creaturesId: number[];
}

@IonicPage()
@Component({
	selector: 'page-add-party',
	templateUrl: 'add-party.html',
})
export class AddPartyPage {
	private party: IParty = {
		id: null,
		name: '',
		creaturesId: [],
	};
	private creatures: ICreature[] = [];
	private allCreatures: ICreature[] = [];
	private partyForm: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private partyService: PartyService, private creatureService: CreatureService, private formBuilder: FormBuilder){
		this.loadParty();
		this.partyForm = formBuilder.group({
			id: ['', Validators.compose([])],
			name: ['', Validators.compose([Validators.required])],
		});
	}

	async loadParty(){
    	this.party = await this.navParams.get("party");
    	this.allCreatures = await this.creatureService.getCreature();
    	if(this.party == null){
      		this.party = {
				id: null,
				name: '',
				creaturesId: [],
			}
		}
		else{
			console.log(this.party)
			for (let i = 0; this.party.creaturesId && i < this.party.creaturesId.length; i++) {
				for (let j = 0; j < this.allCreatures.length; j++) {
					if(this.party.creaturesId[i] === this.allCreatures[j].id){
						this.creatures[this.creatures.length] = this.allCreatures[j];
					}
				}
			}
		}
		console.log(this.party)
		return;
	}

	addCreature(){
		if(!this.party.creaturesId)
			this.party.creaturesId = [];
		this.party.creaturesId[this.creatures.length] = this.allCreatures[this.creatures.length].id;
		this.creatures[this.creatures.length] = this.allCreatures[this.creatures.length];
		console.log(this.party)
	}
	trashCreature(creature: ICreature){
		for (let i = 0; i < this.party.creaturesId.length; i++) {
			if(this.party.creaturesId[i] === creature.id){
				this.party.creaturesId.splice(i, 1);
				break;
			}
		}
	}

	onAddParty(party: IParty){
		console.log(this.party)
		this.partyService.addParty(party);
		this.navCtrl.pop();
	}
	trashThisParty(){
		if(this.party.id != null)
			this.partyService.delParty(this.party);
		this.navCtrl.pop();
	}
}
