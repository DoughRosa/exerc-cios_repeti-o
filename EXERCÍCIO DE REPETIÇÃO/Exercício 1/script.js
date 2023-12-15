let maiorAltura = 0;
let menorAltura = 0;

for (let repetir=1; repetir <= 15; repetir++){

    let altura = Number(prompt(`Digite a Altura da pessoa: `));

    if(altura>maiorAltura) {
        maiorAltura = altura
    }

    if(altura<menorAltura || menorAltura == 0){
        menorAltura = altura
    }
};

document.write("A maior altura é: ", maiorAltura);
document.write("A maior Altura é: ", menorAltura);


