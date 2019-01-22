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
            name: "addCreatureTittle",
            values: [
                "New or existing creature?",
                "Uma nova ou já existente criatura?"
            ]
        },
        {
            name: "newCreature",
            values: [
                "New!",
                "Nova!"
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
            name: "existingCreature",
            values: [
                "Existing!",
                "Existente!"
            ]
        }
        
    ];
}