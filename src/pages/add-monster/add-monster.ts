import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MonsterService } from '../../services/monster.service';

export interface IMonster {
  name: string;
  initiative: number;
  hp: number;
}

@IonicPage()
@Component({
  selector: 'page-add-monster',
  templateUrl: 'add-monster.html',
})
export class AddMonsterPage {
  private monster: IMonster;

  constructor(public navCtrl: NavController, public navParams: NavParams, private monsterService: MonsterService) {}

  async ionViewDidLoad(){
    this.monster = this.navParams.get("monster");
    if(this.monster.name == "")
      return;

    
  }

  onAddMonster(monster: IMonster){
    console.log(monster);
    this.monsterService.addMonster(monster);
    this.navCtrl.pop();
  }
}
