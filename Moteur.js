"use strict";
exports.__esModule = true;
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, km) {
        this.vitesse = vitesse;
        this.km = km;
    }
    Moteur.prototype.getVitesse = function () {
        return this.vitesse;
    };
    Moteur.prototype.setVitesse = function (vitesse) {
        this.vitesse = vitesse;
    };
    Moteur.prototype.getKm = function () {
        return this.km;
    };
    Moteur.prototype.setKm = function (km) {
        this.km = km;
    };
    return Moteur;
}());
exports.Moteur = Moteur;
