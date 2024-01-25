//criando as váriaves
let valor 
let quantidade
let opcao = prompt("Bem vindo ao DoDev-Thru, qual seria o seu pedido hoje? " + 
 "\n1 - Abastecer com gasolina; \n2 - Abastecer com alcool; \n3 - Calibrar os pneus")

 //criando as switch cases
 switch (opcao) { 
    case "1": 
      valor = parseInt(prompt("Digite o valor deseja para abastecer"))
      quantidade = valor / 5
      console.log("Foram abastecidos " + quantidade + "L de gasolina")
      break; 
    case "2" :
      valor = parseInt(prompt("Digite o valor desejado para abastecer!"))
      quantidade = valor / 3
      console.log("Foram abastecidos " + quantidade + "L de álcool")
      break;
    default:
      console.log("Pneus calibrados com sucesso")
      break;
 }