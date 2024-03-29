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
                "Options",
                "Opções"
            ]
        },
        {
            name: "languageLabel",
            values: [
                "Language",
                "Linguagem"
            ]
        },
        {
            name: "partyName",
            values: [
                "Party Name",
                "Nome do Grupo"
            ]
        },
        {
            name: "cancel",
            values: [
                "Cancel",
                "Cancelar"
            ]
        },
        {
            name: "ok",
            values: [
                "O.K.",
                "O.K."
            ]
        }
        
    ];
}