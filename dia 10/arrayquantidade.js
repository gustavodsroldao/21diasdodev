

let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Digite a quantidade de números para inserir no array"))

//populando array 'preenchendo-a'
for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt("Digite o " + (i + 1) + " número"))
  array[i] = numero
}

document.writeln("Array original: " + array)

//invertendo o array

let contador = 4
for (let i = 0; i < 5; i ++) {
  arrayInvertido[i] = array[contador]
  contador--
}

document.writeln("Array invertido: " + arrayInvertido)