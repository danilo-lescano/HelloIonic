import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CreatureService, ICreature } from '../../services/creature.service';

import { Localization } from './localization';

@IonicPage()
@Component({
	selector: 'page-add-creature',
	templateUrl: 'add-creature.html',
	providers: [Localization],
})
export class AddCreaturePage {
	@ViewChild('nameInput') nameInput;

	private creature: ICreature;
	private creatureForm: any;

	private listCreaturesAdded: ICreature[] = [];

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

	async onAddCreature(creature: ICreature){
		await this.creatureService.addCreature(creature);
		this.listCreaturesAdded.push(await this.creatureService.getLastCreature());
		this.dismissModal();
	}
	async saveAndContinue(creature: ICreature){
		await this.creatureService.addCreature(creature);
		this.listCreaturesAdded.push(await this.creatureService.getLastCreature());
		this.creature = {
			id: null,
			isPlayer: this.creature.isPlayer,
			name: null,
			initiative: "1d20",
			hp: null
		}
		this.nameInput.setFocus();
	}
	trashThisCreature(){
		if(this.creature.id != null)
			this.creatureService.delCreature(this.creature);
		this.dismissModal();
	}
	dismissModal(){
		this.viewController.dismiss(this.listCreaturesAdded);
	}
}
