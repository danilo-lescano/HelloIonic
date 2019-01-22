import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageService, Languages } from '../../services/language.service';
import { Localization } from './localization';

@IonicPage()
@Component({
	selector: 'page-options',
	templateUrl: 'options.html',
	providers: [Localization],
})
export class OptionsPage {
	private languages = Languages;

	private chosedLanguage = this.languages[0];

	constructor(private navCtrl: NavController, private languageService: LanguageService, private msg: Localization) { }

	async ionViewWillEnter(){
		let index = await this.languageService.getLang();
		this.chosedLanguage = this.languages[index];
	}

	changeLanguage(){
		let index; let flag = true;
		for (let i = 0; i < this.languages.length && flag; i++)
			if(this.languages[i] == this.chosedLanguage){
				index = i;
				flag = false;
			}
		this.languageService.changeLanguage(index);
	}
}
