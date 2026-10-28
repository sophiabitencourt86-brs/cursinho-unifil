let nome = prompt("Digite seu nome:")
let peso = prompt("Informe a seu peso (kg)")
let altura = prompt (digite sua altura(m): '')
gerarRelatorio(peso,altura)

let resultado = calcularIMC(peso,altura)
alert(resultado)

function calcularIMC(peso,altura){
     return peso/(altura*altura)
}

function classificarIMC(imc){
     if(imc >=40){
       alert("obesidade grau 3")
     }else if(IMC >= 35){
          alert("obesidade grsu 2")
     }else if(imc >= 30){
          alert("obesidade grau 1")
     }else if (imc >=25){
          alert("sobrepeso")
     }else if( imc >= 18.5){
          alert("peso ideal")
     }else if( imc < 18.5)
     alert("abaixo do peso")

}

function gerarRelatorio(peso,altura){
     let imc = calcularIMC(peso,altura)
     classificarIMC(imc)
}
