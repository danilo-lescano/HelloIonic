import { Component } from '@angular/core';
import { IonicPage, ModalController, Modal, NavParams } from 'ionic-angular';

import { CreatureService, ICreature } from '../../services/creature.service';

@IonicPage()
@Component({
	selector: 'page-creature',
	templateUrl: 'creature.html',
})
export class CreaturePage {
	private creatures: ICreature[] = [];
	private isPlayerInterface: boolean = false;

	constructor(private modal: ModalController, private navParams: NavParams, private creatureService: CreatureService) { }

	ionViewWillEnter() {
		this.loadCreatures();
		this.isPlayerInterface = this.navParams.get("isPlayer");
	}
	async loadCreatures() {
		this.creatures = await this.creatureService.getCreature();
		this.creatures.sort(function (a, b) {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
		});
	}
	renderAddCreaturePage(creature?: ICreature) {
		var isPlayer: boolean = this.isPlayerInterface;
		var modalView: Modal;
		if (creature != null)
			modalView = this.modal.create("AddCreaturePage", { creature, isPlayer });
		else
			modalView = this.modal.create("AddCreaturePage", { isPlayer });

		modalView.present();
		modalView.onDidDismiss(() => this.loadCreatures());
	}
}
