
// ---> Crie um algoritmo que receba um número inteiro positivo e um array. 
// { Popule o array e no final exiba os índices em que número inserido aparece nesse array.
//   Para testes do exercício use até 10 elementos no array.}
// popular = preencher
// Um array (arranjo ou vetor) é um conjunto de dados (que pode assumir os mais diversos tipos,
// desde do tipo primitivo a objeto dependendo da linguagem de programação). 
// Arrays são utilizados para armazenar mais de um valor em uma única variável. 
// Isso é comparável a uma variável que pode armazenar apenas um valor.

const array = []
const indices = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"))
for (let i = 0; i < 10; i++) {// suponhamos que o array irá ter até 10 elementos
  const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
  array[i] = elemento;
}

for (let i = 0; i < 10; i++) { //suponhamos que o array ira ter até 10 elementos
  if (array[i] === numeroProcurado) {
    indices[contadorIndice] = i
    contadorIndice++
  }

}

document.writeln(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`);

