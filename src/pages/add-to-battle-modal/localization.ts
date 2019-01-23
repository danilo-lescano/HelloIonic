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
                "Add To Battle",
                "Adicionar à Batalha"
            ]
        },
        {
            name: "addPresenting",
            values: [
                "Add creatures, players, npcs or encounter groups to the battle.",
                "Adicione criaturas, jogadores, npcs ou grupos de encontro para a batalha."
            ]
        },
        {
            name: "playerLabel",
            values: [
                "Player or NPCs",
                "Jogador ou NPCs"
            ]
        },
        {
            name: "partyLabel",
            values: [
                "Encounter Group",
                "Gtupo de Encontro"
            ]
        },
        {
            name: "monsterLabel",
            values: [
                "Monster",
                "Monstro"
            ]
        },
        {
            name: "addCreatureBtn",
            values: [
                "Add this creatures!",
                "Adicionar essas criaturas!"
            ]
        },
        
    ];
}