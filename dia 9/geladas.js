// criando as variaveis

let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = prompt("Digite seu peso em KG")
let altura = prompt("Digite sua altura em metros")
let profissao = prompt("Digite sua profissão")

console.log("Olá " + nome + ", você tem " + idade + " anos, é "
+ profissao + ", tem " + altura + "m de altura e pesa " + peso + "Kg. ")

//verificando idade
if(idade >= 18) {
  console.log("Liberado para tomar umas geladas.")
} else {
  console.log("Você ainda não tem idade para tomar umas geladas.")
}

//Descobrindo a idade fracionada
let meses = idade * 12
let semanas = idade * 12
let dias = idade * 12

//descobrindo IMC
let imc = peso / (altura * altura)

if (imc < 18.5) {
  console.log("Seu IMC indica -> Magreza")
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu IMC indica -> Normal")
} else if (imc >= 25 && imc <= 30) {
  console.log("Seu IMC indica -> Sobrepeso")
} else {
  conole.log("Seu IMC indica -> Obesidade")
}

//Descobrindo o ano de nascimento

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoNasc)

//Exibindo anos e idades

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
  console.log(anoVivido + " - " + idadeAtual + " anos de idade")
  idadeAtual++
}
let continuar 
//executando o loop DOWHILE
do {
  //inserir lógica anterior

  let continuar = prompt("Deseja inserir os dados novamente? (s/n) ")
} while (continuar == "s")