import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export interface IMonster {
    name: string;
    initiative: number;
    hp: number;
}

@Injectable()
export class MonsterService {
    private monsters: IMonster[] = [];

    constructor(private storage: Storage){}

    addMonster(monster: IMonster){
        this.monsters.push(monster);
        this.storage.set('monsters', this.monsters);
    }
    async getMonster(){
        this.monsters = await this.storage.get('monsters');
        if(this.monsters === null)
            this.monsters = [];
        return this.monsters.slice();
    }
}