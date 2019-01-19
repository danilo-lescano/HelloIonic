import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CreatureService } from '../../services/creature.service';

import { ICreature } from '../../services/creature.service';

@IonicPage()
@Component({
	selector: 'page-add-creature',
	templateUrl: 'add-creature.html',
})
export class AddCreaturePage {
	private creature: ICreature;
	private creatureForm: any;

	constructor(private viewController: ViewController, private navParams: NavParams, private creatureService: CreatureService, private formBuilder: FormBuilder) {
		this.loadCreature();
		this.creatureForm = formBuilder.group({
			id: ['', Validators.compose([])],
			name: ['', Validators.compose([Validators.required])],
			initiative: ['', Validators.compose([Validators.pattern(/\d*d?\d+/g)])],
			hp: ['', Validators.compose([Validators.pattern(/\d*d?\d+/g)])],
			isPlayer: ['', Validators.compose([])],
		});
	}

	async loadCreature(){
		var isPlayer = await this.navParams.get("isPlayer");
    	this.creature = await this.navParams.get("creature");
    	if(this.creature == null){
      		this.creature = {
				id: null,
				isPlayer: false,
				name: null,
				initiative: "1d20",
				hp: null
			}
		}
		this.creature.isPlayer = isPlayer ? isPlayer : this.creature.isPlayer;
  	}

	onAddCreature(creature: ICreature){
		this.creatureService.addCreature(creature);
		this.viewController.dismiss();
	}
	saveAndContinue(creature: ICreature){
		this.creatureService.addCreature(creature);
		this.creature = {
			id: null,
			isPlayer: false,
			name: null,
			initiative: "1d20",
			hp: null
		}
	}
	trashThisCreature(){
		if(this.creature.id != null)
			this.creatureService.delCreature(this.creature);
		this.viewController.dismiss();
	}
	dismissModal(){
		this.viewController.dismiss();
	}
}
