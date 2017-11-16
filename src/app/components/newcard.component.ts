import { Component } from "@angular/core";
import { Card } from "../class/Card";
import { Color } from "../class/Color";
import { CardService } from "../services/cards.service";

@Component ({
    selector: 'app-newcard',
    templateUrl: '../views/newcard.component.html',
    styleUrls: [
        '../views/styles/reset.css',
        '../views/styles/app.component.css'
      ]
})
export class NewCardComponent {
    public form_card:Card = new Card(0, '', '', '', '', '', '', '', '', '', '');

    constructor( private service: CardService ){}

    changeTextColor(color:Color){
        this.form_card.setColortext(color.toString());
    }

    changeBgColor(color:Color){
        this.form_card.setColorbg(color.toString());
    }
    
    save(){
        this.service.addCard( this.form_card );
    }

}