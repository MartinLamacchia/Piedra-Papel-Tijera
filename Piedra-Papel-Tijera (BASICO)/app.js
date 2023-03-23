let jugador = 0;
let computadora = Math.floor((Math.random()*3)+1);

jugador = parseInt(prompt("Elige para juegar:\n 1 para PIEDRA\n 2 para PAPEL\n 3 para TIJERA"));

if (jugador === 1) {
    alert("Elejiste 🥌");
}else if(jugador === 2){
    alert("Elejiste 📰");
}else if (jugador === 3) {
    alert("Elejiste ✂");
}else{
    alert("No elegiste ninguna opcion \n PERDISTE");
}

if (jugador === computadora) {
    if (computadora === 1) {
        alert("La PC eligio 🥌");
    }else if(computadora === 2){
        alert("La PC eligio 📰");
    }else if (computadora === 3) {
        alert("La PC eligio ✂");
    }
    alert("EMPATARON");
}else if(jugador === 1 && computadora ===3){
    if (computadora === 1) {
        alert("La PC eligio 🥌");
    }else if(computadora === 2){
        alert("La PC eligio 📰");
    }else if (computadora === 3) {
        alert("La PC eligio ✂");
    }
    alert("GANASTE");
}else if (jugador === 2 && computadora === 1) {
    if (computadora === 1) {
        alert("La PC eligio 🥌");
    }else if(computadora === 2){
        alert("La PC eligio 📰");
    }else if (computadora === 3) {
        alert("La PC eligio ✂");
    }
    alert("GANASTE");
}else if(jugador === 3 && computadora === 2){
    if (computadora === 1) {
        alert("La PC eligio 🥌");
    }else if(computadora === 2){
        alert("La PC eligio 📰");
    }else if (computadora === 3) {
        alert("La PC eligio ✂");
    }
    alert("GANASTE");
}else{
    if (computadora === 1) {
        alert("La PC eligio 🥌");
    }else if(computadora === 2){
        alert("La PC eligio 📰");
    }else if (computadora === 3) {
        alert("La PC eligio ✂");
    }
    alert("PERDISTE")
}
