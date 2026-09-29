// parte  A 
let rendaMensalEmCentavos = 300000;
let mesesDecorridos = 12;
let totalJaPagoPeloAluno = 1000000;

let parcela = (rendaMensalEmCentavos * 0.18) / 100;

if (rendaMensalEmCentavos < 200000) {
  console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (mesesDecorridos > 60) {
  console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido, pois passou o prazo de 60 meses.");
} else if (totalJaPagoPeloAluno >= 1800000) {
  console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido, Contrato quitado.");
} else {
  console.log(`O valor da parcela desse mês é R$ ${parcela} reais`);
}

// Parte B 

rendaMensalEmCentavos = 150000;
mesesDecorridos = 12;
totalJaPagoPeloAluno = 1000000;

parcela = (rendaMensalEmCentavos * 0.18) / 100;

if (rendaMensalEmCentavos < 200000) {
  console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (mesesDecorridos > 60) {
  console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido, pois passou o prazo de 60 meses.");
} else if (totalJaPagoPeloAluno >= 1800000) {
  console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido, Contrato quitado.");
} else {
  console.log(`O valor da parcela desse mês é R$ ${parcela} reais`);
}