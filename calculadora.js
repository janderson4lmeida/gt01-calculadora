var um = parseFloat(prompt("Digite o primeiro número: "));
var dois = parseFloat(prompt("Digite o segundo número: "));
var operacao = prompt("Digite a operação desejada");
    
    if(operacao == "+") {
        var resultado = um + dois;
           }else if(operacao == "-") {
             var resultado = um - dois;
            }else if (operacao == "*" || operacao == "x" || operacao == "x"){
                var resultado = um * dois;
            }else if (operacao == "/"){
                var resultado = um / dois;
            }else {
                var resultado = "Operação inválida";
            }
            alert("resultado é: " + resultado);
        