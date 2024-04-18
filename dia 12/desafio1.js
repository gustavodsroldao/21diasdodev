// passo 1: rie dois arrays para nomes e senhas

let nomes = []
let senhas = []
let contador = 0

let continuar = true

while (continuar) {
  //passo 2 e 3: Solicitando qual operação o usuario deseja fazer e organizando
  // a execução do código com um switchCase dentro de um while
  let opcao = prompt("O que deseja fazer? 1 - Cadastro/ 2 - Login / 3 - Excluir / 4 - Encerrar");

  switch(opcao) {
    case "1":
      //passo 4: criando um cadastro de usario
      nomes[contador] = prompt("Qual o nome?")
      senhas[contador] = prompt("Qual a senha?")
      contador++

      break;
    
    case "2":
      //passo 5 criando login
      let nome = prompt("Qual o nome?")
      let senha = promtp("Qual a senha?")
      let loginValido = false

      for (let i = 0; i < nomes.lenght; i++) {
        if (nome == nomes[i] && senha == senhas[i]) {
          loginValido = true
        }
      }

      if (loginValido) {
        alert("Login feito com sucesso. Bem vindo!")
      } else {
        alert("Login ou senha incorretos!")
      }

      break;

    case "3":
        //passo 6: criando opc excluir
      let nomeExcluir = prompt("Qual o nomne que deseja excluir?")
      let nomesAux = []
      let senhasAux = []
      let contadorAux = 0

      for (let i = 0; i < contador; i++) {
        if (nomeExcluir == nomes[i]) {
          alert("Cadastro excluído com sucesso")
        } else {
          nomesAux[contadorAux] = nomes[i]
          senhasAux[contadorAux] = senhas[i]
          contadorAux++
        }
      }

      nomes = nomesAux
      senhas = senhasAux
      contador--

      break;
          
    case "4":
      continuar = false
      break;
    default:
      console.log("Opção invalida.")
      break;

  }
}