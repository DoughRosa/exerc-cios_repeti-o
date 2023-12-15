

for (let i = 30; i>= 1; i--) {
    
    let primo = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            primo = false;
        }
    }

    if(i == 1){
        document.write(i)
    } else if(primo) {
        document.write("[", i, "] <br>");
    } else {
        document.write(i, "<br>");
    }
}