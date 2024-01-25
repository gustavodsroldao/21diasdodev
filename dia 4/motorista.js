// aqui usamos o let, pois nome, idade, temCarta, temCarro, podem ser atualizadas
// já const, não.
// ---> parseInt, fara o arredondamento dos numeros,
// ---> apenas numeros inteiros ('nao decimais') <----

let nome = ''
let idade = 0
let temCarta = false
let temCarro = false

nome = prompt ("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let opcaoCarta = prompt("Você tem carteira de motorista? (s/n)")
if (opcaoCarta == "s"){
    temCarta = true
}   
let opcaoCarro = prompt("Você tem carro? (s/n)")
if (opcaoCarro == "s") {
    temCarro = true
}

if (idade < 18 || !temCarta){
  console.log(nome + ", você não pode dirigir!")
} else if (idade >= 18 && temCarta && !temCarro){
  console.log ( nome + ", você pode dirigir! Mas não tem carro :(")
} else { 
  console.log(nome + ", você será o motorista!")
}