import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
	private monsterForm: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private monsterService: MonsterService, private formBuilder: FormBuilder) {
		this.loadMonster().then(()=>{
			this.monsterForm = formBuilder.group({
				id: ['', Validators.compose([])],
				name: ['', Validators.compose([Validators.required])],
				initiative: ['', Validators.compose([Validators.pattern(/\d*d?\d+/g)])],
				hp: ['', Validators.compose([Validators.pattern(/\d*d?\d+/g)])],
				isPlayer: ['', Validators.compose([])],
			});
		});
	}

	async loadMonster(){
    	this.monster = await this.navParams.get("monster");
    	if(this.monster == null){
      		this.monster = {
				id: null,
				isPlayer: false,
				name: null,
				initiative: null,
				hp: null
			}
		}
		return;
  	}

	onAddMonster(monster: IMonster){
		this.monsterService.addMonster(monster);
		this.navCtrl.pop();
	}
	trashThisMonster(){
		if(this.monster.id != null)
			this.monsterService.delMonster(this.monster);
		this.navCtrl.pop();
	}
}
