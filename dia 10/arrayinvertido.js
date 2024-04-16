

let array = []
let arrayInvertido = []

//populando array 'preenchendo-a'
for (let i = 0; i < 5; i++) {
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