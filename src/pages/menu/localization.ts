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
                "Battle Assistant",
                "Assistente de Batalha"
            ]
        },
        {
            name: "bestiaryTitle",
            values: [
                "Bestiary",
                "Bestiário"
            ]
        },
        {
            name: "playerTitle",
            values: [
                "Player",
                "Jogador"
            ]
        },
        {
            name: "encouterTitle",
            values: [
                "Encounter Groups",
                "Grupos de Encontro"
            ]
        },
        {
            name: "optionsTitle",
            values: [
                "Options",
                "Opções"
            ]
        },
    ];
}