import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export interface ICreature {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}

@Injectable()
export class CreatureService {
    private creatures: ICreature[] = [];
    private creatureCount: number = 0;

    constructor(private storage: Storage){
        //this.storage.clear();
        this.load();
    }

    async load(){
        var creaturesAux = await this.storage.get("creatures");
        var creatureCountAux = await this.storage.get("creatureCount");

        if(creaturesAux === null || creatureCountAux === null){
            this.storage.set('creatures', this.creatures);
            this.storage.set('creatureCount', this.creatureCount);
        }
        else{
            this.storage.get('creatures').then(creatures => this.creatures = creatures);
            this.storage.get('creatureCount').then(creatureCount => this.creatureCount = creatureCount);
        }
    }

    addCreature(creature: ICreature){
        if(creature.id === null)
            creature.id = ++this.creatureCount;
        
        var isEdited = false;
        for (let i = 0; i < this.creatures.length && !isEdited; i++) {
            if(creature.id == this.creatures[i].id){
                isEdited = true;
                this.creatures[i] = creature;
            }
        }
        if(!isEdited)
            this.creatures.push(creature);
        this.storage.set('creatures', this.creatures);
        this.storage.set('creatureCount', this.creatureCount);
    }
    delCreature(creature: ICreature){
        var isEdited = false;
        for (let i = 0; i < this.creatures.length && !isEdited; i++) {
            if(creature.id == this.creatures[i].id){
                isEdited = true;
                this.creatures.splice(i, 1);
            }
        }
        this.storage.set('creatures', this.creatures);
    }
    async getCreature(){
        this.creatures = await this.storage.get('creatures');
        if(this.creatures === null)
            this.creatures = [];
        return this.creatures.slice();
    }
}