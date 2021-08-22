var nome,nota1,nota2,media;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a nota 01 do aluno: ")
nota02 = prompt("Digite a nota 02 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) /2;

if (media >=50){
    alert("Aprovado!" + nome )
}
    else
        alert("Reprovado!" + nome) 