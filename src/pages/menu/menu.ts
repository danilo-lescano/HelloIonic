import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MonsterPage } from '../monster/monster';
import { PlayerPage } from '../player/player';

export interface PageInterface {
	title: string;
	pageName: string;
	pageComponent?: any;
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
		{ title: 'Monsters', pageName: 'MonsterPage', pageComponent: MonsterPage, icon: 'paw' },
		{ title: 'Player', pageName: 'PlayerPage', pageComponent: PlayerPage, icon: 'person' },
	];

	constructor(public navCtrl: NavController, public navParams: NavParams) { }
	
	async ionViewDidEnter(){
	}
	openPage(page: PageInterface) {
		this.navCtrl.push(page.pageComponent);
	}
}
