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
                "Add new or existing member?",
                "Adicionar um novo membro ou já um existente?"
            ]
        },
        {
            name: "newCreature",
            values: [
                "New!",
                "Novo!"
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
        },
        {
            name: "editing",
            values: [
                "Editing",
                "Editando"
            ]
        },
        {
            name: "newParty",
            values: [
                "New Party!",
                "Novo Grupo!"
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
                "O campo Nome é obrigatório!"
            ]
        },
        {
            name: "saveParty",
            values: [
                "Save Group",
                "Salvar Grupo"
            ]
        }
        
    ];
}