var today = new Date();
var dayOfWeek = today.getDay();

// COMIDAS
let lomo = document.getElementById("lomo");
let bondiola = document.getElementById("bondiola");
let completa = document.getElementById("completa");
let simple = document.getElementById("simple");
let dobleCheddar = document.getElementById("dobleCheddar");
let cono = document.getElementById("cono");
let conoCheddar = document.getElementById("conoCheddar");
let pancho = document.getElementById("pancho");
let veggie = document.getElementById("veggie");
let salchiPapa = document.getElementById("salchiPapa");


// DIAS
if (dayOfWeek === 7) {
    lomo.innerHTML = "$2000";
    bondiola.innerHTML = "$2000";
    completa.innerHTML = "$1600";
    simple.innerHTML = "$1100";
    dobleCheddar.innerHTML = "$1800";
    cono.innerHTML = "$500";
    conoCheddar.innerHTML = "$650";
    pancho.innerHTML = "$750";
    veggie.innerHTML = "$850";
    salchiPapa.innerHTML = "$1100";

} else {
    lomo.innerHTML = "$1800";
    bondiola.innerHTML = "$1800";
    completa.innerHTML = "$1400";
    simple.innerHTML = "$1000";
    dobleCheddar.innerHTML = "$1600";
    cono.innerHTML = "$500";
    conoCheddar.innerHTML = "$650";
    pancho.innerHTML = "$650";
    veggie.innerHTML = "$750";
    salchiPapa.innerHTML = "$1000";
}