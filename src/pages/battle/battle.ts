import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal, PopoverController } from 'ionic-angular';

import { IParty, PartyService } from '../../services/party.service';
import { ICreature, CreatureService } from '../../services/creature.service';
import { NumberPopoverComponent } from '../../components/number-popover/number-popover';

export interface ICreatureGen{
	id: number;
	name: string;
	initiative: string;
	hp: string;
	isPlayer: boolean,
	genInitiative: number;
	genHp: number;
	maxHp: number;
	colorSpan: string;
	colorFlag: number;
	numberOrder: number;
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

	private isDamage: boolean = false;
	private isHeal: boolean = false;
	
	private numberOrder: number[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private creatureService: CreatureService, private partyService: PartyService, private modal: ModalController, private popoverCtrl: PopoverController) {}

	async ionViewWillEnter(){
		this.allParties = await this.partyService.getParty();
		this.allCreatures = await this.creatureService.getCreature();
	}

	toICreatureGen(creature: ICreature){
		let aux: ICreatureGen = {
			id: creature.id,
			name: creature.name,
			initiative: creature.initiative,
			hp: creature.hp,
			isPlayer: creature.isPlayer,
			genInitiative: this.calculateDices(creature.initiative),
			genHp: this.calculateDices(creature.hp),
			maxHp: this.calculateDices(creature.hp),
			colorSpan: "",
			colorFlag: null,
			numberOrder: null
		};
		return aux;
	}
	calculateDices(diceString: string){
		function calculateDie(die: string){
			if(!/d/.test(die)) return parseInt(die.trim());
			var numbs = die.split('d');
			var first: number = parseInt(numbs[0].trim()) || 1;
			var second: number = parseInt(numbs[1].trim());
			var value: number = 0;
			for (let i = 0; i < first; i++)
				value += Math.floor(Math.random() * second + 1);
			return value;
		}

		var matchRegex = /\d*d?\d+/;
		var dices = matchRegex.exec(diceString) || [];
		var value: number = 0;
		for (let i = 0; i < dices.length; i++)
			value += calculateDie(dices[i]);
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
			//for (let i = 0; i < this.allCreatures.length; i++)
			for (let j = 0; j < creature.length; j++){
				//if(creature[j].id === this.allCreatures[i].id){
				if(!this.numberOrder[creature[j].id])
					this.numberOrder[creature[j].id] = 0;
				this.battleCreatures[this.battleCreatures.length] = this.toICreatureGen(creature[j]);
				this.battleCreatures[this.battleCreatures.length - 1].numberOrder = ++this.numberOrder[creature[j].id];
			}
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
		var color = "";
		var colorFlag = creature.colorFlag = Math.random();
		creature.genHp -= this.multiplier;
		creature.colorSpan = "danger";

		if(creature.genHp <= 0) color = "danger";
		if(creature.genHp > creature.maxHp) color = "secondary";
		setTimeout(() =>{
			if(creature.colorFlag = colorFlag)
				creature.colorSpan = color;
		}, 1000);
	}
	healHp(creature: ICreatureGen){
		var color = "";
		var colorFlag = creature.colorFlag = Math.random();
		creature.genHp += this.multiplier;
		creature.colorSpan = "secondary";

		if(creature.genHp <= 0) color = "danger";
		if(creature.genHp > creature.maxHp) color = "secondary";
		setTimeout(() =>{
			if(creature.colorFlag = colorFlag)
				creature.colorSpan = color;
		}, 1000);
	}
	delCreature(creature: ICreatureGen){
		var flag = true;
		for (let i = 0; flag && i < this.battleCreatures.length; i++) {
			if(creature.id === this.battleCreatures[i].id && creature.numberOrder === this.battleCreatures[i].numberOrder){
				flag = false;
				this.battleCreatures.splice(i, 1);
			}
		}
	}

	changeInitiative(creature: ICreatureGen, initiative){
		creature.genInitiative = parseInt(initiative);
		this.sortCreatures();
	}
}
