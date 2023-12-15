let positivos = 0;
let negativos = 0;
let porcentagemPositivos = 0;
let porcentagemNegativos = 0; 
let media = 0;
let soma = 0;

for (let i = 0; i < 10; i++){
    let numero = Number(prompt("digite um número: "));
    soma += numero;
    media = soma/10;
   
    if (numero < 0){
        negativos++;
    } else if (numero > 0) {
        positivos++;
    } 
    porcentagemPositivos = (positivos*100)/10;
    porcentagemNegativos = (negativos*100)/10;
    
}

document.write ("A média é: ", media, "<br>");
document.write ("A quantidade de positivos são: ", positivos, "<br>");
document.write ("A quantidade de negativos são: ", negativos, "<br>");
document.write ("A porcentagem de positivos é: ", porcentagemPositivos, "% <br>");
document.write ("A porcentagem de negativos é: ", porcentagemNegativos, "% <br>");


