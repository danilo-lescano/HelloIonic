import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export const Languages = [
    "English",
    "Português"
];

@Injectable()
export class LanguageService {
    private lang: number;
    constructor(private storage: Storage){
        //this.storage.clear();
        this.load();
    }

    async load(){
        this.lang = await this.storage.get("languageIndex");
        if(this.lang === null){
            this.storage.set('languageIndex', 0);
            this.lang = 0;
        }
    }

    changeLanguage(languageIndex: number){
        this.lang = languageIndex;
        this.storage.set('languageIndex', this.lang);
    }
    async getLang(){
        this.lang = await this.storage.get('languageIndex');
        if(this.lang === null)
            this.lang = 0;
        return this.lang;
    }
}