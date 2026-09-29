const ladoA = 5;
const ladoB = 3;

if (ladoA === ladoB) {
    // testar se é bucha
    switch (ladoA) {
        case 0:
            // Bucha de Branco  ou Zero
            console.log("Bucha de Branco");
            break;
        case 1:
            // Bucha de 1 ou Ás
            console.log("Bucha de Ás");
            break
        case 2:
            // Bucha de Duque ou Dois 
            console.log("Bucha de Duque");
            break
       case 3:
            // Bucha de Terno ou Três
            console.log("Bucha de Terno");
            break
        case 4:
            // Bucha de Quadra ou Quatro
            console.log("Bucha de Quadra");
            break
        case 5:
            // Bucha de Quina ou cinco
            console.log("Bucha de Quina");
            break
        case 6:
            // Bucha de Sena ou Seis
            console.log("Bucha de Sena");
            break
    }
} else {
    console.log("NÃO é bucha!");
}