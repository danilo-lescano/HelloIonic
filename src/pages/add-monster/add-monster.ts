import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MonsterService } from '../../services/monster.service';

export interface IMonster {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}

@IonicPage()
@Component({
	selector: 'page-add-monster',
	templateUrl: 'add-monster.html',
})
export class AddMonsterPage {
	private monster: IMonster;
	private isPlayer: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, private monsterService: MonsterService) {}

	async ionViewWillLoad(){
    	this.monster = this.navParams.get("monster");
    	if(this.monster == null){
      		this.monster = {
				id: null,
				isPlayer: false,
				name: null,
				initiative: null,
				hp: null
			}
			this.isPlayer = false;
		}
  	}

	onAddMonster(monster: IMonster){
		this.monsterService.addMonster(monster);
		this.navCtrl.pop();
	}
}
