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
                "Battle",
                "Batalha"
            ]
        },
        {
            name: "confirmLeave",
            values: [
                "Confirm leave",
                "Confimar saída"
            ]
        },
        {
            name: "leaveMsg",
            values: [
                "You will lose all the battle track. Are you sure want to leave?",
                "Você perderá toda as informações da batalha. Você tem certeza de que quer sair?"
            ]
        },
        {
            name: "no",
            values: [
                "No",
                "Não"
            ]
        },
        {
            name: "yes",
            values: [
                "Yes",
                "Sim"
            ]
        },
        {
            name: "baseDmgMsg",
            values: [
                "Base damage/cure multiplier:",
                "Multiplicador base de dano/cura:"
            ]
        },
        {
            name: "hpDoubleDot",
            values: [
                "HP:",
                "HP:"
            ]
        },
        {
            name: "initiativeDoubleDot",
            values: [
                "Initiative:",
                "Iniciativa:"
            ]
        },
        
        
    ];
}