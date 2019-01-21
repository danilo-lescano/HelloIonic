import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CreaturePage } from '../creature/creature';
import { EncounterPage } from '../encounter/encounter';
import { OptionsPage } from '../options/options';

export interface PageInterface {
	title: string;
	pageName: string;
	pageComponent?: any;
	isPlayer?: boolean;
	icon: string;
}

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {
	rootPage: any = HomePage;

	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[] = [
		{ title: 'Bestiary', pageName: 'CreaturePage', pageComponent: CreaturePage, isPlayer: false, icon: 'paw' },
		{ title: 'Player', pageName: 'CreaturePage', pageComponent: CreaturePage, isPlayer: true, icon: 'person' },
		{ title: 'Encounter Groups', pageName: 'EncounterPage', pageComponent: EncounterPage, icon: 'custom-paws' },
		{ title: 'Options', pageName: 'OptionsPage', pageComponent: OptionsPage, icon: 'cog' },
	];

	constructor(public navCtrl: NavController) { }
	
	openPage(page: PageInterface) {
		let isPlayer: boolean = page.isPlayer;
		this.navCtrl.push(page.pageComponent, { isPlayer });
	}
}
