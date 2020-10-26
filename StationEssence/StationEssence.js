"use strict";
exports.__esModule = true;
exports.StationEssence = void 0;
var StationEssence = /** @class */ (function () {
    function StationEssence(prix_essence, prix_diesel, prix_electrique) {
        this.prix_essence = prix_essence;
        this.prix_diesel = prix_diesel;
        this.prix_electrique = prix_electrique;
    }
    StationEssence.prototype.prixEssence = function () {
        return this.prix_essence;
    };
    StationEssence.prototype.prixDiesel = function () {
        return this.prix_diesel;
    };
    StationEssence.prototype.prixElectrique = function () {
        return this.prix_electrique;
    };
    return StationEssence;
}());
exports.StationEssence = StationEssence;
