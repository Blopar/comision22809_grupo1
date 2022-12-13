class Phone {
    constructor(marca,title, imagen, dimensiones, peso, pantallaSize, pantallaResolucion,
        sistemaOperativo, cpu, memoria, bateria) {

        this.marca = marca;    
        this.title = title;
        this.imagen = imagen;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.pantallaSize = pantallaSize;
        this.sistemaOperativo = sistemaOperativo;
        this.cpu = cpu;
        this.memoria = memoria;
        this.bateria = bateria;       
    }
}

export default Phone;