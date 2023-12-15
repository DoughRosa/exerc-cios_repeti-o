pedroAltura = 150;
lucasAltura = 110;
contagem = 0;

do {
    pedroAltura = pedroAltura + 2;
    lucasAltura = lucasAltura + 3;
    contagem++
} while (pedroAltura > lucasAltura) {
    document.write ("passaram-se ", contagem, "anos e agora eles tem a mesmo tamanho.");
} 

do {
    pedroAltura = pedroAltura + 2;
    lucasAltura = lucasAltura + 3;
    contagem++
} while (pedroAltura >= lucasAltura) {
    document.write ("passaram-se ", contagem, "e Lucas é mairo que Pedro.");
}

