import {Vehicule} from '../../Vehicule';
import {Moteur} from '../../Moteur';
export class Voiture extends Vehicule {
    constructor(marque:String, couleur:String, prix:number, moteur:Moteur){
        super(marque, couleur, prix, moteur);
    }
}