const n1 = 6;
const n2 = 4;
const n3 = 8;
const media = (n1+n2+n3)/3;
console.log(media);

if (media < 5) {
    console.log(media);
    console.log('Reprovado');
} else if (media >= 5 && media < 7) {
    console.log(media);
    console.log('Recuperação');
} else if (media >= 7) {
    console.log(media);''
    console.log('Aprovado');
} else {
    console.log('Inválido');
}