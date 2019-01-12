import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MonsterService } from '../../services/monster.service';

import { AddMonsterPage } from '../add-monster/add-monster';

export interface IMonster {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}

@IonicPage()
@Component({
	selector: 'page-monster',
	templateUrl: 'monster.html',
})
export class MonsterPage {
    private monsters: IMonster[] = [];

 	constructor(public navCtrl: NavController, public navParams: NavParams, private monsterService: MonsterService) {}

	async ionViewWillEnter(){
		this.monsters = await this.monsterService.getMonster();
		this.monsters.sort(function(a, b){
			if(a.name < b.name) return -1;
			if(a.name > b.name) return 1;
			return 0;
		});
	}
	renderAddMonsterPage(monster?: IMonster){
		if(monster != null)
			this.navCtrl.push(AddMonsterPage, {monster});
		else
			this.navCtrl.push(AddMonsterPage);
	}
}
