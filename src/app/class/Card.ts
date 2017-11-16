export class Card {

    public id:number;
    public nom:string;
    public metier:string;
    public description:string;
    public adresse:string;
    public email:string;
    public tel:string;
    public imgprofil:string;
    public imgbg:string;
    public colortext:string;
    public colorbg:string;

    constructor(id:number, nom:string, metier:string, description:string, adresse:string, email:string, tel:string, imgprofil:string, imgbg:string, colortext:string, colorbg:string){
        this.id = id;
        this.nom = nom;
        this.metier = metier;
        this.description = description;
        this.adresse = adresse;
        this.email = email;
        this.tel = tel;
        this.imgprofil = imgprofil;
        this.imgbg = imgbg;
        this.colortext = colortext;
        this.colorbg = colorbg;
    }

    setId(id) { this.id = id; }
    getId() { return this.id; }
    setNom(nom) { this.nom = nom; }
    getNom() { return this.nom; }
    setMetier(metier) { this.metier = metier; }
    getMetier() { return this.metier; }
    setDescription(description) { this.description = description; }
    getDescription() { return this.description; }
    setAdresse(adresse) { this.adresse = adresse; }
    getAdresse() { return this.adresse; }
    setEmail(email) { this.email = email; }
    getEmail() { return this.email; }
    setTel(tel) { this.tel = tel; }
    getTel() { return this.tel; }
    setImgprofil(imgprofil) { this.imgprofil = imgprofil; } 
    getImgprofil() { return this.imgprofil; } 
    setImgbg(imgbg) { this.imgbg = imgbg; } 
    getImgbg() { return this.imgbg; } 
    setColortext(colortext) { this.colortext = colortext; } 
    getColortext() { return this.colortext; } 
    setColorbg(colorbg) { this.colorbg = colorbg; } 
    getColorbg() { return this.colorbg; }
    
    
}