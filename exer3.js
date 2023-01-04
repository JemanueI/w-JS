const precoProd = 150;
const formaPagamento = 1;

if (formaPagamento === 1) {
    console.log(precoProd - (precoProd * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoProd - (precoProd * 0.15));
} else if (formaPagamento === 3) {
    console.log(precoProd);
} else if (formaPagamento === 4) {
    console.log(precoProd + (precoProd * 0,1));
}