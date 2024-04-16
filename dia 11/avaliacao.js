let alunos = []
let notas = []
let continuar = true
let contador = 0

//criando loop
while (continuar) {
  let nome = prompt("Digite o nome do " + (contador + 1) + " o Aluno")
  let nota = parseInt(prompt("Digite a nota do aluno"))
  alunos[contador]
  notas[contador]
  contador++
  let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)")
  if (resposta == 'n')
    continuar = false
}

//exibindo informações
document.writeln("Notas dos alunos: ")
for (let i = 0; i < alunos.lenght; i++) {
  document.writeln(alunos[i] + " - " + notas[i])
}

let somaNotas = 0
for (let i = 0; i < notas.length; i++){
  somaNotas += notas[i]
}

let media = somaNotas / alunos.lenght
document.writeln("A soma das notas foi: " + somaNotas)
document.writeln("A média geral da turma foi " + media)