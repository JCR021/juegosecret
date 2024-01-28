let numerosecreto;
let intentos;
let listanumerosert = [];
let numeromax = 10;

console.log(numerosecreto);

function asignar1 (elemento, texto) {
    let titleHTML = document.querySelector (elemento);
    titleHTML.innerHTML = texto;
    return;
    }



function verificarintento() {
    let numerodeusuario = parseInt(document.getElementById("valorusuario").value);

    console.log(intentos);
    if (numerodeusuario === numerosecreto){
        asignar1 ("p",`Acertaste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}, mi nero`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numerodeusuario > numerosecreto) {
            asignar1("p","El numero es menor");
        } else {
            asignar1("p","El numero es mayor");
        }
        intentos ++;
        limpiarcaja();
    }    
    return;
}

function limpiarcaja () {
    let valorcaja = document.querySelector("#valorusuario").value = "";
    return;   
}
    
function mensajesinci() {
    asignar1 ("h1", "Juego del codigo!" );
    asignar1 ("p", `Indica un numero del 1 al ${numeromax}`);
    numerosecreto = generarnumerosecret();
    intentos = 1;
    
}


function generarnumerosecret() {
    //si el numero generado esta en el lista 
    let numerogenerado = Math.floor(Math.random()*numeromax)+1;

    console.log(numerogenerado);
    console.log(listanumerosert)
    // si ya sorteamos todos los numeros

    if (listanumerosert.length == numeromax){
        asignar1("p", `Ya se sortearon todos los  ${numeromax} posibles intentos, mi nero`);
    } else {


        if (listanumerosert.includes(numerogenerado)){
            
            return generarnumerosecret();

        }else{
            listanumerosert.push(numerogenerado)
            return numerogenerado;
        }
    }
}

function reinciarjuego() {
    //limpiar caja
    limpiarcaja();


    //mensaje de cantidad de numeros
    //general el numero random
    //deshabilitar el boton de reinicio

    mensajesinci();

    //inicializar intentos
    document.getElementById("reiniciar").setAttribute("disabled", "true");


}

mensajesinci();



