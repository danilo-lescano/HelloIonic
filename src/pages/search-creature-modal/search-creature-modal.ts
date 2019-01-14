import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';
import { ICreature } from '../../services/creature.service';

@IonicPage()
@Component({
	selector: 'page-search-creature-modal',
	templateUrl: 'search-creature-modal.html',
})
export class SearchCreatureModalPage {
	private creatures: ICreature[] = [];
	private creaturesAdded: number[] = [];
	private creaturesSendBack: ICreature[] = [];
	private isPlayer: boolean = true;
	private isMonster: boolean = true;
	private nameSearch: string = "";

	constructor(private navParams: NavParams, private viewController: ViewController) {}
	
	async ionViewWillEnter(){
		this.creatures = await this.navParams.get("creatures").slice();
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
		if(this.creaturesAdded[creature.id])
			this.creaturesAdded[creature.id]--;
	}
	addCreature(creature: ICreature){
		if(this.creaturesAdded[creature.id] === undefined)
			this.creaturesAdded[creature.id] = 0;
		this.creaturesAdded[creature.id]++;
	}
}
