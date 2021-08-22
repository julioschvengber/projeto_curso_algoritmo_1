
function acaoBotao(params) {
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Digite o primeiro Valor: ")
        valor02 = prompt("Digite o segundo Valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + ( parseInt( valor01 ) + parseInt( valor02 ) )
        sairLoop = prompt("Deseja Sair? S/N?")
    }while(sairLoop == "N")
    
}

