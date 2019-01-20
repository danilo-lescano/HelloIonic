import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { AppUpdate } from '@ionic-native/app-update';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PartyService } from '../services/party.service';
import { CreatureService } from '../services/creature.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { BattlePage } from '../pages/battle/battle';
import { PartyPage } from '../pages/party/party';
import { MonsterPage } from '../pages/monster/monster';
import { PlayerPage } from '../pages/player/player';
import { AddPartyPage } from '../pages/add-party/add-party';
import { NumberPopoverComponent } from '../components/number-popover/number-popover';

import { Localization as HomeLocalization } from '../pages/home/localization';
import { Localization as BattleLocalization } from '../pages/battle/localization';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    BattlePage,
    PartyPage,
    MonsterPage,
    AddPartyPage,
    PlayerPage,
    NumberPopoverComponent,
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
    AddPartyPage,
    PlayerPage,
    NumberPopoverComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PartyService,
    CreatureService,
    Storage,
    AppUpdate,
    HomeLocalization,
    BattleLocalization
  ]
})
export class AppModule {}
