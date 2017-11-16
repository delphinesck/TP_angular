import { Component } from "@angular/core";
import { CardService } from "../services/cards.service";
import { Card } from "../class/Card";

@Component ({
    selector: 'app-home',
    templateUrl: '../views/home.component.html',
    styleUrls: ['../views/styles/app.component.css']
})
export class HomeComponent {

    mycards: Card[];

    constructor( private service: CardService ){
        this.getCards()
    }

    getCards(){
        this.mycards = this.service.getAllCards();
    }


}