//Criando as váriaves
let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo número"))
let opcao = parseInt(prompt("Digite a operção que deseja realizar"
+ "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))


//Criando switchcase
switch (opcao) {
    case 1:
      console.log(num1 + " + " + num2 + " = " + (num1 + num2))
       break;
    case 2: 
      console.log(num1 + " - " + num2 + " = " + (num1 - num2))
      break;
    case 3:
      console.log(num1 + " * " + num2 + " = " + (num1 * num2))
      break;
    default:
      console.log(num1 + " / " + num2 + " = " + (num1 / num2))
}