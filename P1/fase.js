//Fedir-P1

//resposta=3
function q1() {
    var vidas=1;
    while (vidas>0) {
        var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número");
        
        if (resposta==3) {
            alert("Loading...");
            window.location.href="./fase2.html";
            break;
        } else if (resposta!=3) {
                vidas--
                alert("BOOOMMM!! \n Você acabou com a Terra!!");
                window.location.href="../gameOver.html";
            }
    }   
}

//resposta=4
function q2() {
    var vidas=1;
    while (vidas>0) {
        var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número");
        
        if (resposta==4) {
            alert("Loading...");
            window.location.href="./fase3.html";
            break;
        } else if (resposta!=4) {
                vidas--
                alert("BOOOMMM!! \n Você acabou com a Terra!!");
                window.location.href="../gameOver.html";
            }
    } 
 
}

//resposta=1
function q3() {
    var vidas=1;
    while (vidas>0) {
        var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número");
        
        if (resposta==1) {
            alert("Loading...");
            window.location.href="";
            break;
        } else if (resposta!=1) {
                vidas--
                alert("BOOOMMM!! \n Você acabou com a Terra!!");
                window.location.href="../gameOver.html";
            }
    } 

}

//resposta=2
function q4() {
    var vidas=1;
    while (vidas>0) {
        var resposta= prompt("Qual sua resposta 1, 2, 3 ou 4\n digite apenas o número");
        
        if (resposta==2) {
            alert("Loading...");
            window.location.href="../vitoria.html"; //vitória
            break;
        } else if (resposta!=2) {
                vidas--
                alert("BOOOMMM!! \n Você acabou com a Terra!!");
                window.location.href="../gameOver.html";
            }
    } 
   
}
