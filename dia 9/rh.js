confirmar = "n";
let salAtual;
while (confirmar != "s") {
  let nome = prompt("Digite seu nome: ");
  let idade = parseInt(prompt("Digite sua idade: "));
  salAtual = parseFloat(prompt(" Qual seu salário atual?"));
  document.writeln(`Nome: ${nome}, Idade: ${idade}, Salário atual: ${salAtual} <br>`);
  confirmar = prompt("As informações estão certas? (s/n) ");
}

let aumento = 0.015;
document.writeln("Previsão salarial para os próximos 10 anos: <br>");

for (let ano = 1; ano <= 10; ano++) {
  salAtual += salAtual * aumento;
  document.writeln(`${2023 + ano} = R$ ${salAtual.toFixed(2)} <br>`);
}