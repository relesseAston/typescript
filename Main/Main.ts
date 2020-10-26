import {MoteurEssence} from '../Moteurs/MoteurEssence/MoteurEssence'
import {MoteurDiesel} from '../Moteurs/MoteurDiesel/MoteurDiesel';
import {MoteurElectrique} from '../Moteurs/MoteurElectrique/MoteurElectrique';
import {Voiture} from '../Vehicules/Voiture/Voiture';
import {Moto} from '../Vehicules/Moto/Moto';
import {Camion} from '../Vehicules/Camion/Camion';
import {StationEssence} from '../StationEssence/StationEssence';
const moteur_essence = new MoteurEssence(160, 70);
const moteur_diesel = new MoteurDiesel(200, 90);
const moteur_electrique = new MoteurElectrique(250, 120);
const voiture = new Voiture('Tesla', 'noir', 1000000, moteur_electrique);
const moto = new Moto('BMW', 'bleu', 250000, moteur_diesel);
const camion = new Camion("Peugeot", 'blanc', 700000, moteur_essence);
const station = new StationEssence(0.50, 0.70, 1);

const marque_voiture = voiture.getMarque();
console.log('La marque de la voiture est : '+marque_voiture);

const vitesse_moto = moto.getMoteur().getVitesse();
console.log('La vitesse de la moto est : '+vitesse_moto);

const km_camion = camion.getMoteur().getKm();
console.log('Le km du camion est : '+km_camion);

const prixPleinEssence = camion.faireLePleinEssence(station, 30);
console.log(prixPleinEssence);


