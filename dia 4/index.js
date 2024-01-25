const fome = prompt("Você está com fome?")
const dinheiro = prompt("Você tem dinheiro?")
const abertoRest = prompt("Aquele restaurante está aberto?")

if (fome === 'não' || dinheiro == 'não' ) {
    console.log('Hoje iremos jantar em casa.')
} else if (dinheiro === "Sim" && abertoRest === "Sim") {
    console.log('Hoje o jantar será no seu restaurante predileto!');
} else { 
    console.log('Vamos pedir um delivery.')
}