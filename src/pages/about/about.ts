import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Localization } from './localization';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Localization]
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
