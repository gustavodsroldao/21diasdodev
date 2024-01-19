// As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.
// As variáveis de const não podem ser atualizadas nem declaradas novamente 
// (são utilizadas para valores constantes, como o valor de pi, por exemplo).

const fome  = prompt("Boa noite, você está com fome? (Sim/Não)") // sim ou não ( ñ muda )
const dinheiro = prompt("Por acaso, você está com dinheiro sobrando? (Sim/Não)") // 
const restauranteAberto = prompt("O restaurante estará aberto hoje a noite? (Sim/Não)") // 

if (fome === "não" || dinheiro == "não") { // se
    console.log("Hoje iremos jantar em casa.");
} else if (dinheiro === "Sim" && restauranteAberto === "Sim") {
    console.log("Hoje o jantar é por minha conta e no nosso restaurante predileto!"); // ; separador de declarações
} else { // se não caso o restaurante esteja fechado mas tenha $$$$.
    console.log("Peça um delivery, agora mesmo!")
}