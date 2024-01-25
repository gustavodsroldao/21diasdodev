// #1 Criando nossa váriavel
let numero = parseInt(prompt("Digite um número inteiro e positivo"))

//criando o loop for
for (let i = 0; i <= numero; i++) {
 console.log(i)
}

// #2
//criando o loop for
for (let i = 0; i <= 50; i+= 5) {
  console.log(i)
}

//#3
for (let i = 50; i >= 0; i -= 5) {
  console.log(i)
}

//#4 tabuada
{
let numero = parseInt(prompt("Digite um número inteiro e positivo novamento")) 
for (let i = numero; i <= numero +2; i++) {
  console.log("Tabuada do número: " + i)
  for (let j = 0; j <= 10; j++) {
    console.log(i + "  X " + j + " = " +  (i * j))
 }
  }
} 
