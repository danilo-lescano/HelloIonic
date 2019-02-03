import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { ICreature, CreatureService } from '../../services/creature.service';
import { Localization } from './localization';

@IonicPage()
@Component({
	selector: 'page-search-creature-modal',
	templateUrl: 'search-creature-modal.html',
	providers: [Localization],
})
export class SearchCreatureModalPage {
	private creatures: ICreature[] = [];
	private creaturesAdded: number[] = [];
	private creaturesSendBack: ICreature[] = [];
	private isPlayer: boolean = true;
	private isMonster: boolean = true;
	private nameSearch: string = "";

	private numberOfCreatures: number = 0;

	constructor(private navParams: NavParams, private viewController: ViewController, private creatureService: CreatureService, private msg: Localization) {}
	
	async ionViewWillEnter(){
		this.loadData();
	}
	async loadData(){
		this.creatures = await this.creatureService.getCreature();
		this.creatures.sort(function(a, b){
			if(a.name < b.name) return -1;
			if(a.name > b.name) return 1;
			return 0;
		});
	}

	closeMe(){
		this.viewController.dismiss();
	}
	addThisCreatures(){
		for (let i = 0; i < this.creaturesAdded.length; i++)
			if(this.creaturesAdded[i]){
				var flag = true;
				for (let j = 0; j < this.creatures.length && flag; j++)
					if(this.creatures[j].id === i){
						flag = false;
						for (let k = 0; k < this.creaturesAdded[i]; k++)
							this.creaturesSendBack.push(this.creatures[j]);
					}
			}

		this.viewController.dismiss(this.creaturesSendBack);
	}
	removeCreature(creature: ICreature){
		if(this.creaturesAdded[creature.id]){
			this.creaturesAdded[creature.id]--;
			this.numberOfCreatures--;
		}
	}
	addCreature(creature: ICreature){
		if(this.creaturesAdded[creature.id] === undefined)
			this.creaturesAdded[creature.id] = 0;
		this.creaturesAdded[creature.id]++;
		this.numberOfCreatures++;
	}

}