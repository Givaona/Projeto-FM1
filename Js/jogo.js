
   
 var vidas=2;
 //resposta=3
function q1() {
    while (vidas>0) {
        var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número");
        
        if (resposta==3) {
            alert("Parabéns!! Faltam apenas 2 etapas para desarmar a bomba completamente!");
        } else if (resposta!=3) {
            alert("Você possui apenas mais uma chance!!!");
            vidas--
        }
    }   
    if (vidas<1) {
        alert("BOOOMMM!! \n Você acabou com a Terra!!");
        window.location.assign();
    }
}

//resposta=4
function q2() {
    var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número ;)");
    while (vidas>0) {
        if (resposta==4) {
            alert("Parabéns!! Faltam apenas 2 etapas para desarmar a bomba completamente!");
            break;
        } else if (resposta!=4) {
            vidas--
            alert("Você possui apenas mais uma chance!!!");
        }   
    }
    if (vidas<=0) {
        alert("BOOOMMM!! \n Você acabou com a Terra!!");
        
    }
}

//resposta=1
function q3() {
    var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número ;)");
    while (vidas>0) {
        if (resposta==1) {
            alert("Parabéns!! Faltam apenas 2 etapas para desarmar a bomba completamente!");
            break;
        } else if (resposta!=1) {
            vidas--
            alert("Você possui apenas mais uma chance!!!");
        }   
    }
    if (vidas<=0) {
        alert("BOOOMMM!! \n Você acabou com a Terra!!");
        
    }
}

//resposta=2
function q4() {
    var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número ;)");
    while (vidas>0) {
        if (resposta==2) {
            alert("Parabéns!! Faltam apenas 2 etapas para desarmar a bomba completamente!");
            break;
        } else if (resposta!=2) {
            vidas--
            alert("Você possui apenas mais uma chance!!!");
        }   
    }
    if (vidas<=0) {
        alert("BOOOMMM!! \n Você acabou com a Terra!!");
        
    }
}
