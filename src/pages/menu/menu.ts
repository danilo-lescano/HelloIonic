import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MonsterPage } from '../monster/monster';
import { PlayerPage } from '../player/player';
import { PartyPage } from '../party/party';

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

  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Parties', pageName: 'PartyPage', pageComponent: PartyPage, icon: 'people'},
    {title: 'Monsters', pageName: 'MonsterPage', pageComponent: MonsterPage, icon: 'paw'},
    {title: 'Player', pageName: 'PlayerPage', pageComponent: PlayerPage, icon: 'person'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage(page: PageInterface){
    this.navCtrl.push(page.pageComponent);
  }

  isActive(page: PageInterface){

  }
}
