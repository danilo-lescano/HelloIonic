import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MonsterService } from '../../services/monster.service';

import { AddMonsterPage } from '../add-monster/add-monster';

export interface IMonster {
    name: string;
    initiative: number;
    hp: number;
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
	}
	renderAddMonsterPage(){
		this.navCtrl.push(AddMonsterPage);
	}
}
