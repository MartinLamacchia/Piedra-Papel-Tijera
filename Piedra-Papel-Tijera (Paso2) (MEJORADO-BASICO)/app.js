function eleccion(jugada) {
    let resultado = ""
    if (jugada === 1) {
        resultado = 1;
    }else if(jugada === 2){
        resultado = 2;
    }else if (jugada === 3) {
        resultado = 3;
    }else{
        resultado = "La opcion elegida no corresponde"
    }
    return resultado
}


let jugador = eleccion(parseInt(prompt("Elige para juegar:\n 1 para PIEDRA\n 2 para PAPEL\n 3 para TIJERA")));
let computadora = eleccion(Math.floor((Math.random()*3)+1));

console.log(jugador)
console.log(computadora)

if (jugador === computadora) {
    if (computadora === 1) {
        alert("Los 2 eligieron 🥌");
    }else if(computadora === 2){
        alert("Los 2 eligieron 📰");
    }else if (computadora === 3) {
        alert("Los 2 eligieron ✂");
    }
    alert("EMPATARON");
}else if((jugador === 1 && computadora ===3) || (jugador === 2 && computadora ===1) || (jugador === 3 && computadora ===2)){
    if (jugador === 1) {
        alert("Vos elegiste 🥌 y la PC eligio ✂");
    }else if(jugador === 2){
        alert("Vos elegiste 📰 y la PC eligio 🥌");
    }else if (jugador === 3) {
        alert("Vos elegiste ✂ y la PC eligio 📰");
    }
    alert("GANASTE");
}else{
    if (computadora === 1) {
        alert("Vos elegiste ✂ y la PC eligio 🥌");
    }else if(computadora === 2){
        alert("Vos elegiste 🥌 y la PC eligio 📰");
    }else if (computadora === 3) {
        alert("Vos elegiste 📰 y la PC eligio ✂");
    }
    alert("PERDISTE")
}
