import { Component } from '@angular/core';
import { IonicPage, ModalController, Modal } from 'ionic-angular';

import { CreatureService } from '../../services/creature.service';

import { ICreature } from '../../services/creature.service';

@IonicPage()
@Component({
	selector: 'page-monster',
	templateUrl: 'monster.html',
})
export class MonsterPage {
    private creatures: ICreature[] = [];

 	constructor(private modal: ModalController, private creatureService: CreatureService) {}

	ionViewWillEnter(){
		this.loadCreatures();
	}
	async loadCreatures(){
		this.creatures = await this.creatureService.getCreature();
		this.creatures.sort(function(a, b){
			if(a.name < b.name) return -1;
			if(a.name > b.name) return 1;
			return 0;
		});
	}
	renderAddCreaturePage(creature?: ICreature){
		var isPlayer = false;
		var modalView: Modal;
		if(creature != null)
			modalView = this.modal.create("AddCreaturePage", { creature });
		else
			modalView = this.modal.create("AddCreaturePage", { isPlayer });

		modalView.present();
		modalView.onDidDismiss(()=>this.loadCreatures());
	}
}
