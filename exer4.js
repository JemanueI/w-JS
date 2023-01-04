class Carros {
    marca;
    cor;
    mediaGastoPorKm;

    constructor (marca, cor, mediaGastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.mediaGastoPorKm = mediaGastoPorKm;
    }

    calcularGastoPercurso(distancia, precoComb){
        return (distancia * this.mediaGastoPorKm) * precoComb;
    }
}

const uno = new Carros('Fiat','Branco', 1/12);
uno.calcularGastoPercurso(70, 5);
const viagemUno = uno.calcularGastoPercurso(70, 5);

console.log(viagemUno);



