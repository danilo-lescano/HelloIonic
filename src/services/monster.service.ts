import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export interface IMonster {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}

@Injectable()
export class MonsterService {
    private monsters: IMonster[] = [];
    private monsterCount: number = 0;

    constructor(private storage: Storage){}

    addMonster(monster: IMonster){
        if(monster.id == null)
            monster.id = ++this.monsterCount;
        
        var isEdited = false;
        for (let i = 0; i < this.monsters.length && !isEdited; i++) {
            if(monster.id == this.monsters[i].id){
                isEdited = true;
                this.monsters[i] = monster;
            }
        }
        if(!isEdited)
            this.monsters.push(monster);
        this.storage.set('monsters', this.monsters);
        this.storage.set('monsterCount', this.monsterCount);
    }
    async getMonster(){
        this.monsters = await this.storage.get('monsters');
        if(this.monsters === null)
            this.monsters = [];
        return this.monsters.slice();
    }
}