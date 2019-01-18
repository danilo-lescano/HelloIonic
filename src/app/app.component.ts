import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppUpdate } from '@ionic-native/app-update';

import { MenuPage } from '../pages/menu/menu';

@Component({
  	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = MenuPage;

	constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private appUpdate: AppUpdate) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
			this.x();
		});
	}

	x(){
		//update
		const updateUrl = 'https://danilocaverna.github.io/BattleAssistant/update.xml';
		console.log('core ' + this.platform.is('core'))
		console.log('mobileweb ' + this.platform.is('mobileweb'))
		console.log('android ' + this.platform.is('android'))

		if(!this.platform.is('core') && !this.platform.is('mobileweb') && this.platform.is('android'))
			alert();//this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });
	}
}

