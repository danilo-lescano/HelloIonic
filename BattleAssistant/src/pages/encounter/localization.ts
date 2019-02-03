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
                "Encounter Groups",
                "Grupo de Encontros"
            ]
        },
        {
            name: "newPaty",
            values: [
                "New Encounter Group",
                "Novo Grupo de Encontro"
            ]
        },
        {
            name: "partyName",
            values: [
                "Encounter Name",
                "Nome do Encontro"
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