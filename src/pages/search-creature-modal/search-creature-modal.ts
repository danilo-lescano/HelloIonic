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
	addCreature(creature: ICreature){
		this.viewController.dismiss(creature);
	}
}
