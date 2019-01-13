import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export interface ICreature {
	id: number;
	isPlayer: boolean;
	name: string;
	initiative: string;
	hp: string;
}
export interface IParty {/* PARTYYYYY o// \o/ \\o */
	id: number;
	name: string;
	creaturesId: number[];
}

@Injectable()
export class PartyService {
    private parties: IParty[] = [];
    private partyCount: number = 0;

    constructor(private storage: Storage){
        //this.storage.clear();
        this.load();
    }

    async load(){
        var partiesAux = await this.storage.get("parties");
        var partyCountAux = await this.storage.get("partyCount");

        if(partiesAux === null || partyCountAux === null){
            this.storage.set('parties', this.parties);
            this.storage.set('partyCount', this.partyCount);
        }
        else{
            this.storage.get('parties').then(parties => this.parties = parties);
            this.storage.get('partyCount').then(partyCount => this.partyCount = partyCount);
        }
    }

    addParty(party: IParty){
        if(party.id === null || party.id === undefined)
            party.id = ++this.partyCount;
        
        var isEdited = false;
        for (let i = 0; i < this.parties.length && !isEdited; i++) {
            if(party.id == this.parties[i].id){
                isEdited = true;
                this.parties[i] = party;
            }
        }
        if(!isEdited)
            this.parties.push(party);
        this.storage.set('parties', this.parties);
        this.storage.set('partyCount', this.partyCount);
    }
    delParty(party: IParty){
        var isEdited = false;
        for (let i = 0; i < this.parties.length && !isEdited; i++) {
            if(party.id == this.parties[i].id){
                isEdited = true;
                this.parties.splice(i, 1);
            }
        }
        this.storage.set('parties', this.parties);
    }
    async getParty(){
        this.parties = await this.storage.get('parties');
        if(this.parties === null)
            this.parties = [];
        return this.parties.slice();
    }
}