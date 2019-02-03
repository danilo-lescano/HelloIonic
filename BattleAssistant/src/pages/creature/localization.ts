import { Injectable } from '@angular/core';
import { LanguageService } from "../../services/language.service";

@Injectable()
export class Localization {
	constructor(private langService: LanguageService){
        this.load();
    }
    async load(){
        var index = await this.langService.getLang();
        this.texts.forEach(text => {
            this[text.name] = text.values[index];
        });
    }
    private texts: { name: string, values: string[] }[] = [
        {
            name: "title1",
            values: [
                "Monster",
                "Monstro"
            ]
        },
        {
            name: "title2",
            values: [
                "Players and NPCs",
                "Jogador e NPCs"
            ]
        },
    ];
}