import {Moteur} from './Moteur';
export class Vehicule {
    private marque:String;
    private couleur:String;
    private prix:number;
    private moteur:Moteur;

    constructor(marque:String, couleur:String, prix:number, moteur:Moteur){
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.moteur = moteur;
    }

    public getMarque() : String {
        return this.marque;
    }

    public setMarque(marque:String) : void {
        this.marque = marque;
    }

    public getCouleur() : String {
        return this.couleur;
    }

    public setCouleur(couleur:String) : void {
        this.couleur = couleur;
    }

    public getPrix() : number {
        return this.prix;
    }

    public setPrix(prix:number) : void {
        this.prix = prix;
    }

    public getMoteur() : Moteur {
        return this.moteur;
    }

    public setMoteur(moteur:Moteur) : void {
        this.moteur = moteur;
    }

}