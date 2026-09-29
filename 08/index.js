const idade = 15
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if(idade < 12 || idade > 65  || possuiPatologia == true || altura <150){
    console.log("ACESSO NEGADO");  
} else if(ehEstudante == true || idade < 18){
    console.log("10 Reais")
}
    
  else{
     console.log("20 Reais")
}
