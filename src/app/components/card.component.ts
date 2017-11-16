import { Component, Input } from "@angular/core";
import { Card } from "../class/Card";

@Component ({
    selector: 'app-card',
    template: `
    <img id="mini_bgbox" src="{{ card.imgbg }}">
    <div id="mini_infobox">
        Carte de visite N°{{ card.id }}<br /><br />
        {{ card.metier }}
    </div>
    `,
    styleUrls: ['../views/styles/app.component.css']
})
export class CardComponent {

    @Input() card: Card;

    constructor(){

    }
}