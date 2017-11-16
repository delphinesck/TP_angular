import { Injectable } from "@angular/core";
import { Card } from "../class/Card";


@Injectable()
export class CardService {

    public mycards:Card[] = [ 
        new Card(1, "Jean-Pierre BIDULE", "Boulanger", "Je suis un super boulanger qui fait des gâteaux d'anniversaire.", "3 rue des Chocolatines", "jeanpierre@boulanger.fr", "0606060606", "http://www.thierrymarxlaboulangerie.com/wp-content/uploads/2016/02/boulangerie-thierry-marx-esprit.jpg", "http://scd.mashable.france24.com/sites/default/files/styles/mashable_983x554/public/thumbnails/image/painchocune.jpg?itok=GXAgKH4g", "#000000", "#FFFFFF"),
        new Card(2, "Mauricette TRUC", "Eleveuse de petits poneys", "J'élève des petits poneys multicolors !", "8 avenue des Licornes", "mauricette@licorne.fr", "0606060606", "http://unedudragon.free.fr/local/cache-vignettes/L219xH230/fe92c04bd02a5f740a7611c6379b2878-3a935.jpg", "http://www.chiourim.com/wp-content/uploads/2016/10/rainbow05.jpg", "#000000", "#FFFFFF"),
     ];

    addCard( card: Card ){
        this.mycards.push( card );
    }

    getAllCards(){
        return this.mycards;
    }
    
}
