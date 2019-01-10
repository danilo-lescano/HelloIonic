import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
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
    {title: 'Partys', pageName: 'X', icon: 'people'},
    {title: 'Monsters', pageName: 'Y', icon: 'paw'},
    {title: 'Z', pageName: 'Z', icon: 'home'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage(page: PageInterface){

  }

  isActive(page: PageInterface){

  }
}
