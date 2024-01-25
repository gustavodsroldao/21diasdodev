//declaração de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0  

//solicitando informacao ao usuario, e atribuindo os valores as variaveis
//salvar informações em variaveis // nome, idade, altura e peso// resposta na web guarda a info e aloca nos variaves salvando-as
nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite a sua idade"))
altura = parseFloat(prompt("Digite a sua altura"))
peso = parseInt(prompt("Digite seu peso"))

// parseFloat,analisa um argumento
//(convertendo-o para uma string primeiro caso necessário) 
// ---> e retorna um número (número decimal).  <----
// parseInt, fara o arredondamento dos numeros,
// ---> apenas numeros inteiros ('nao decimais') <----

//calculando o ano que a pessoa nasceu e o IMC ( = peso / (altura x altura))
let nascimento = 0
nascimento = 2023 - idade

let IMC = 0
imc = peso / (altura * altura)

//Exibindo as informações no console
console.log("Olá, " + nome + ", você tem " + idade + " anos, nasceu em " + nascimento +
            ", tem ", + altura + " de altura, pesa " + peso + " kg e seu IMC é " + imc + "kg/m²")


