export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechaInicio: string;
    fechaFin: string;

    constructor(nombreE: string, descripcionE: string, fechaInicio: string,
        fechaFin: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
