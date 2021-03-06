"use strict";
exports.__esModule = true;
var MoteurEssence_1 = require("../Moteurs/MoteurEssence/MoteurEssence");
var MoteurDiesel_1 = require("../Moteurs/MoteurDiesel/MoteurDiesel");
var MoteurElectrique_1 = require("../Moteurs/MoteurElectrique/MoteurElectrique");
var Voiture_1 = require("../Vehicules/Voiture/Voiture");
var Moto_1 = require("../Vehicules/Moto/Moto");
var Camion_1 = require("../Vehicules/Camion/Camion");
var StationEssence_1 = require("../StationEssence/StationEssence");
var moteur_essence = new MoteurEssence_1.MoteurEssence(160, 70);
var moteur_diesel = new MoteurDiesel_1.MoteurDiesel(200, 90);
var moteur_electrique = new MoteurElectrique_1.MoteurElectrique(250, 120);
var voiture = new Voiture_1.Voiture('Tesla', 'noir', 1000000, moteur_electrique);
var moto = new Moto_1.Moto('BMW', 'bleu', 250000, moteur_diesel);
var camion = new Camion_1.Camion("Peugeot", 'blanc', 700000, moteur_essence);
var station = new StationEssence_1.StationEssence(0.50, 0.70, 1);
var marque_voiture = voiture.getMarque();
console.log('La marque de la voiture est : ' + marque_voiture);
var vitesse_moto = moto.getMoteur().getVitesse();
console.log('La vitesse de la moto est : ' + vitesse_moto);
var km_camion = camion.getMoteur().getKm();
console.log('Le km du camion est : ' + km_camion);
var prixPleinEssence = camion.faireLePleinEssence(station, 30);
console.log(prixPleinEssence);
