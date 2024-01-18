let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome, por favor!")
idade = parseInt(prompt("Agora, me diga sua idade, por gentileza!"))
altura = parseFloat(prompt("Agora, preciso saber sua altura, estou quase acabando nosso cadastro."))
peso = parseInt(prompt("Para finalizar, o sistema me pede por ultimo, o seu peso."))

let nascimento = 0
nascimento = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá! " + nome + ", aqui no nosso sistema conta que você tem " + idade + " anos, e que nasceu em " + nascimento + ", tens "
             + altura + ", de altura, e pesas " + peso + " kg, e seu IMC é de " + imc + "kg/m².")