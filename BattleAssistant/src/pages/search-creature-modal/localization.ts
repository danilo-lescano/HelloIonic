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
            name: "title",
            values: [
                "Add To Party",
                "Adicionar Grupo"
            ]
        },
        {
            name: "newMemberMsg",
            values: [
                "Add creatures, players or npcs to the party.",
                "Adicionar criaturas, jogadores ou npcs ao grupo."
            ]
        },
        {
            name: "playerLabel",
            values: [
                "Player or NPCs",
                "Jogadores ou NPCs"
            ]
        },
        {
            name: "monsterLabel",
            values: [
                "Monster",
                "Monstro"
            ]
        },
    ];
}