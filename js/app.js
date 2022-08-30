let ventas = parseInt(prompt("Ingrese el monto total de ventas"));
let cvu = parseInt(prompt("Ingrese el costo unitario del producto"));
let q = parseInt(prompt("Ingrese el volumen de ventas"));
let cf = parseInt(prompt("Ingrese el monto total de costos fijos"));

//Podria ser una funcion de calculo
let p = ventas/q
let cm = p-cvu
let PE = cf /cm


//Condiciones
//Aqui lo que trato de indicar es que si coloco una LETRA O algo que no sea un numero que lo invalide a seguir
if (isNaN(ventas & cf & cvu & q)){
    alert ("No corresponde a un formato valido");
} else {
    console.log ("El punto de equilibrio es:" +" "+ PE)
}



if (cm<=0) {
    let cb = prompt("¿Se encuentra en proceso de estructuracion?"   );
    if (cb=="si"){
        alert ("analizar estructura fijas de costos")
    }
    else{
        alert ("NO CUBRIMOS LOS COSTOS VARIABLES CON LA ESTRUCTURA ACTUAL")    }

} else{
    console.log("La contribucion marginal es:" + " "+ cm)
}






