let numero1  = Number( prompt ("Informe o primeiro numero = "))
let numero2 = Number( prompt ("Informe o segundo numero = "))
let operacao = prompt("Informe a operação: \n1 - adição\n2 - subtração\n3 - multiplicação\n4 - divisão")

if( operacao == 1){
    alert(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
} else if( operacao == 2){
    alert(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
} else if( operacao == 3){
    alert(numero1 + " x " + numero2 + " = " + (numero1 * numero2))
} else if( operacao == 4){
    if(numero2 == 0){
        alert("Erro, não é possível dividir por 0")
    } else{
        alert(numero1 + " : " + numero2 + " = " + (numero1/numero2))
    }

} else{
    alert("Operação Inválida")
}
