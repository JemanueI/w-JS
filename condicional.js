const numero = 10;

const numeroPar = (numero%2) === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('Par');
} else if (!numeroPar) {
    console.log('Ímpar');
} else {
    console.log('Inválido');
}