import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CreaturePage } from '../creature/creature';
import { EncounterPage } from '../encounter/encounter';
import { OptionsPage } from '../options/options';

import { Localization } from './localization';

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
	providers: [Localization],
})
export class MenuPage {
	private rootPage: any = HomePage;

	@ViewChild(Nav) nav: Nav;

	private pages: PageInterface[] = [
		{ title: 'bestiaryTitle', pageName: 'CreaturePage', pageComponent: CreaturePage, isPlayer: false, icon: 'paw' },
		{ title: 'playerTitle', pageName: 'CreaturePage', pageComponent: CreaturePage, isPlayer: true, icon: 'person' },
		{ title: 'encouterTitle', pageName: 'EncounterPage', pageComponent: EncounterPage, icon: 'custom-paws' },
		{ title: 'optionsTitle', pageName: 'OptionsPage', pageComponent: OptionsPage, icon: 'cog' },
	];

	constructor(public navCtrl: NavController, private msg: Localization) {}
	
	openPage(page: PageInterface) {
		let isPlayer: boolean = page.isPlayer;
		this.navCtrl.push(page.pageComponent, { isPlayer });
	}
}
