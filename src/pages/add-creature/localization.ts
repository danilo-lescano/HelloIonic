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
                "Editing",
                "Editando"
            ]
        },
        {
            name: "title2",
            values: [
                "New!",
                "Novo!"
            ]
        },
        {
            name: "name",
            values: [
                "Name",
                "Nome"
            ]
        },
        {
            name: "nameErr",
            values: [
                "Sorry, field name is required!",
                "O campo nome é obrigatório!"
            ]
        },
        {
            name: "initiative",
            values: [
                "Initiative",
                "Iniciativa"
            ]
        },
        {
            name: "diceExemple",
            values: [
                "Ex: d20 + 4 or 2d10",
                "Ex: d20 + 4 ou 2d10"
            ]
        },
        {
            name: "hp",
            values: [
                "HP",
                "HP"
            ]
        },
        {
            name: "diceExemple2",
            values: [
                "Ex: 5d8 + 20 or 2d10 + 5d4 + 10",
                "Ex: 5d8 + 20 ou 2d10 + 5d4 + 10"
            ]
        },
        {
            name: "isMonster",
            values: [
                "This is a monster!",
                "Um monstro!"
            ]
        },
        {
            name: "isPlayer",
            values: [
                "This is a NPC/Player!",
                "Um NPC/Jogador"
            ]
        },
        {
            name: "saveCreature",
            values: [
                "Save Creature",
                "Salvar Criatura"
            ]
        },
        {
            name: "saveContinue",
            values: [
                "Save & Continue",
                "Salvar e continuar"
            ]
        },
    ];
}