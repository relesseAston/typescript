export class StationEssence {
    private prix_essence: number;
    private prix_diesel: number;
    private prix_electrique: number;

    constructor(prix_essence:number, prix_diesel:number, prix_electrique:number){
        this.prix_essence = prix_essence;
        this.prix_diesel = prix_diesel;
        this.prix_electrique = prix_electrique
    }

    public prixEssence():number {
        return this.prix_essence;
    }

    public prixDiesel():number {
        return this.prix_diesel;
    }

    public prixElectrique():number {
        return this.prix_electrique;   
    }
}