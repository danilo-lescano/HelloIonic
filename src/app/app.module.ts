import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MonsterService } from '../services/monster.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { BattlePage } from '../pages/battle/battle';
import { PartyPage } from '../pages/party/party';
import { MonsterPage } from '../pages/monster/monster';
import { AddMonsterPage } from '../pages/add-monster/add-monster';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    BattlePage,
    PartyPage,
    MonsterPage,
    AddMonsterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    BattlePage,
    PartyPage,
    MonsterPage,
    AddMonsterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonsterService,
    Storage
  ]
})
export class AppModule {}
