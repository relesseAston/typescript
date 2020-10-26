export class Moteur {
    private vitesse:number;
    private km:number;

    constructor(vitesse:number, km:number){ 
        this.vitesse = vitesse;
        this.km = km;
    }

    public getVitesse() : number {
        return this.vitesse;
    }

    public setVitesse(vitesse:number) : void {
        this.vitesse = vitesse;
    }

    public getKm() : number {
        return this.km;
    }

    public setKm(km: number) : void {
        this.km = km;
    }


}