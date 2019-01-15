import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal, PopoverController } from 'ionic-angular';

import { IParty, PartyService } from '../../services/party.service';
import { ICreature, CreatureService } from '../../services/creature.service';
import { NumberPopoverComponent } from '../../components/number-popover/number-popover';

export interface ICreatureGen{
	name: string;
	initiative: string;
	hp: string;
	isPlayer: boolean,
	genInitiative: number;
	genHp: number;
}

@IonicPage()
@Component({
	selector: 'page-battle',
	templateUrl: 'battle.html',
})
export class BattlePage {

	private allCreatures: ICreature[];
	private allParties: IParty[];

	private battleCreatures: ICreatureGen[] = [];

	private multiplier: number = 1;
	

	constructor(public navCtrl: NavController, public navParams: NavParams, private creatureService: CreatureService, private partyService: PartyService, private modal: ModalController, private popoverCtrl: PopoverController) {}

	async ionViewWillEnter(){
		this.allParties = await this.partyService.getParty();
		this.allCreatures = await this.creatureService.getCreature();
	}

	toICreatureGen(creature: ICreature){
		let aux: ICreatureGen = {
			name: creature.name,
			initiative: creature.initiative,
			hp: creature.hp,
			isPlayer: creature.isPlayer,
			genHp: 0,
			genInitiative: 0
		};
		var dices;
		var matchRegex = /\d*d?\d+/;
		dices = matchRegex.exec(aux.initiative);
		dices = dices ? dices : [];
		for (let i = 0; i < dices.length; i++)
			aux.genInitiative += this.calculateDice(dices[i]);
		dices = matchRegex.exec(aux.hp);
		dices = dices ? dices : [];
		for (let i = 0; i < dices.length; i++)
			aux.genHp += this.calculateDice(dices[i]);
		return aux;
	}
	calculateDice(die: string){
		if(!/d/.test(die))
			return parseInt(die.trim());
		var numbs = die.split('d');
		var first = parseInt(numbs[0].trim());
		first = first? first : 1;
		var second = parseInt(numbs[1].trim());
		var value = 0;
		for (let i = 0; i < first; i++)
			value += Math.floor(Math.random() * second + 1);
		return value;
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
						this.battleCreatures[this.battleCreatures.length] = this.toICreatureGen(creature[j]);
			this.sortCreatures();
		}
	}
	sortCreatures(){
		this.battleCreatures.sort(function(a, b){
			/*if(a.isPlayer && !b.isPlayer) return 1;
			if(!a.isPlayer && b.isPlayer) return -1;
			if(a.name < b.name) return -1;
			if(a.name > b.name) return 1;*/
			if(a.genInitiative < b.genInitiative) return 1;
			if(a.genInitiative > b.genInitiative) return -1;
			return 0;
		});
	}

	presentNumberPopover(myEvent) {
		let popover = this.popoverCtrl.create(NumberPopoverComponent);
		popover.present({
			ev: myEvent
		});
		popover.onDidDismiss(number=>{
			this.multiplier = number;
		});
	}

	damageHp(creature: ICreatureGen){
		creature.genHp -= this.multiplier;
	}
	healHp(creature: ICreatureGen){
		creature.genHp += this.multiplier;
	}
}
