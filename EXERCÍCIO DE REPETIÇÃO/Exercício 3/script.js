let count = Number(prompt("digite o número: "));
let quantidade = Number(prompt("digite quantas vezes irá multiplicá-lo: "));

for(let i=0; i < quantidade; i++){
    document.write (`${count}  x  ${i}  = ${count*i} <br>`);
}
