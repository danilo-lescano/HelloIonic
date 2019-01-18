import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { PartyService } from '../services/party.service';
import { CreatureService } from '../services/creature.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { BattlePage } from '../pages/battle/battle';
import { PartyPage } from '../pages/party/party';
import { MonsterPage } from '../pages/monster/monster';
import { AddCreaturePage } from '../pages/add-creature/add-creature';
import { PlayerPage } from '../pages/player/player';
import { AddPartyPage } from '../pages/add-party/add-party';
import { NumberPopoverComponent } from '../components/number-popover/number-popover';
import { AppUpdate } from '@ionic-native/app-update';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    BattlePage,
    PartyPage,
    MonsterPage,
    AddCreaturePage,
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
    AddCreaturePage,
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
  ]
})
export class AppModule {}
