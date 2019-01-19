import { Component } from '@angular/core';
import { IonicPage, ModalController, Modal } from 'ionic-angular';

import { CreatureService, ICreature } from '../../services/creature.service';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
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
		var isPlayer: boolean = true;
		var modalView: Modal;
		if(creature != null)
			modalView = this.modal.create("AddCreaturePage", { creature, isPlayer });
		else
			modalView = this.modal.create("AddCreaturePage", { isPlayer });

		modalView.present();
		modalView.onDidDismiss(()=>this.loadCreatures());
	}
}
