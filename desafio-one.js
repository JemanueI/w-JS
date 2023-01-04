
const precoEta = 4.79;
const precoGas = 5.79;
const tipoComb = 'Gasolina';
const gastoMedioKM = 12;
const distanciaKM = 78;

const litrosConsumidos = distanciaKM/gastoMedioKM;

if (tipoComb === 'Gasolina') {
    const total = litrosConsumidos * precoGas;
    console.log(total);
} else {
    const total = litrosConsumidos * precoEta;
    console.log(total);
}


