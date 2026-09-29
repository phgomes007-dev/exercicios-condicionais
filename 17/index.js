//Extrato de Compra Online



//Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, faça um programa que ajude a 
//Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.
//Restam 7 parcelas de R$100    
const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;
const valorDaParcela = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasRestantes = quantidadeDoParcelamento - (valorPago / valorDaParcela);

console.log ( `Restam ${parcelasRestantes} parcelas de R$${valorDaParcela}`  );

