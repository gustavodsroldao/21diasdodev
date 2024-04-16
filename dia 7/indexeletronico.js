let saldo = 3600; //valor inicial de exemplo
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false

do {
    const nome = prompt("Por favor, seu nome:");
    const cpf = prompt("Digite seu CPF");
    const valor = Number(prompt("Valor da transação desejada:  "))
    const operacao = prompt("Qual operação deseja fazer? (S/D)")

    if (valor < 0) {
        console.log("Valor invalido. A transação não foi realizada com sucesso.");
    } else if (operacao == "S" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada com sucesso.");
    } else if (operacao == "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso! Seu saldo é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (Tecle 1 para continuar, 2 para parar.)");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false
    }

} while (continuar);

console.log(`Saldo final: R${saldo}`);
console.log(`Maior valor inserido R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${somaValoresInseridos / totalTransacoes}`);