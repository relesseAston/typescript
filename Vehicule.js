"use strict";
exports.__esModule = true;
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, couleur, prix, moteur) {
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.moteur = moteur;
    }
    Vehicule.prototype.getMarque = function () {
        return this.marque;
    };
    Vehicule.prototype.setMarque = function (marque) {
        this.marque = marque;
    };
    Vehicule.prototype.getCouleur = function () {
        return this.couleur;
    };
    Vehicule.prototype.setCouleur = function (couleur) {
        this.couleur = couleur;
    };
    Vehicule.prototype.getPrix = function () {
        return this.prix;
    };
    Vehicule.prototype.setPrix = function (prix) {
        this.prix = prix;
    };
    Vehicule.prototype.getMoteur = function () {
        return this.moteur;
    };
    Vehicule.prototype.setMoteur = function (moteur) {
        this.moteur = moteur;
    };
    Vehicule.prototype.faireLePleinEssence = function (station, nbLitre) {
        var total = nbLitre * station.prixEssence();
        var message = 'Votre quantité est de : ' + nbLitre + ', votre montant est de ' + total + '€';
        return message;
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
