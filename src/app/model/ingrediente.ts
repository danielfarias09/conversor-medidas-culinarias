export class Ingrediente {
    nome: string;
    medidas: {[key: string]: string};

    constructor(nome: string, medidas: {[key: string]: string}){
        this.nome = nome;
        this.medidas = medidas;
    }
}
