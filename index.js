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
let salchiPapa = document.getElementById("salchiPapa")


// DIAS
if (dayOfWeek === 7) {
    lomo.innerHTML = "$1200";
    bondiola.innerHTML = "$1200";
    completa.innerHTML = "$850";
    simple.innerHTML = "$650";
    dobleCheddar.innerHTML = "$1000";
    cono.innerHTML = "$400";
    conoCheddar.innerHTML = "$650";
    pancho.innerHTML = "$750";
    veggie.innerHTML = "$850";
    salchiPapa.innerHTML = "$750";

} else {
    lomo.innerHTML = "$1000";
    bondiola.innerHTML = "$1000";
    completa.innerHTML = "$750";
    simple.innerHTML = "$550";
    dobleCheddar.innerHTML = "$900";
    cono.innerHTML = "$350";
    conoCheddar.innerHTML = "$550";
    pancho.innerHTML = "$450";
    veggie.innerHTML = "$650";
    salchiPapa.innerHTML = "$600";
}