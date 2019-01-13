import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreatureService } from '../../services/creature.service';

import { AddCreaturePage } from '../add-creature/add-creature';

export interface ICreature {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
    private creatures: ICreature[] = [];

 	constructor(public navCtrl: NavController, public navParams: NavParams, private creatureService: CreatureService) {}

   async ionViewWillEnter(){
		this.creatures = await this.creatureService.getCreature();
		this.creatures.sort(function(a, b){
			if(a.name < b.name) return -1;
			if(a.name > b.name) return 1;
			return 0;
		});
	}
	renderAddCreaturePage(creature?: ICreature){
		var isPlayer = true;
		if(creature != null)
			this.navCtrl.push(AddCreaturePage, { creature });
		else
			this.navCtrl.push(AddCreaturePage, { isPlayer });
	}
}
