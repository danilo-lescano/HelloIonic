import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BattlePage } from '../battle/battle';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
	private authForm: any;
	constructor(public navCtrl: NavController, private formBuilder: FormBuilder){
		this.authForm = formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
		});
	}

  	toBattlePage(){
    	this.navCtrl.push(BattlePage);
	}
}