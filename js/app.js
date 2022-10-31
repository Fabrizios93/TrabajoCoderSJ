
function informacionActual(){
    let montoVentasac = parseInt(prompt("Ingrese el monto total de ventas realizadas en pesos"));
    let costoVariableUnitac = parseInt(prompt("Ingrese el costo unitario gastado del producto en pesos"));
    let canTidadvenac = parseInt(prompt("Ingrese las unidades vendidas realizadas"));
    let costoFijoac = parseInt(prompt("Ingrese el monto total de costos fijos en pesos gastado"))}

function informacionBP(){
    let montoVentasbp = parseInt(prompt("Ingrese el monto total de ventas presupuestada en pesos"));
    let costoVariableUnitbp = parseInt(prompt("Ingrese el costo unitario presupuestado del producto en pesos"));
    let canTidadvebp = parseInt(prompt("Ingrese las unidades vendidas presupuestadas"));
    let costoFijobp = parseInt(prompt("Ingrese el monto total de costos fijos en pesos presupuestado"))}


function calculoActual(){
    let precioVentaac = montoVentasac/costoVariableUnitac;
    let contribMarginalac = precioVentaac-costoVariableUnitac;
    let puntoEquilibrioac = costoFijoac /contribMarginalac
}

function calculoBp(){
    let precioVentabp = montoVentasbp/costoVariableUnitbp;
    let contribMarginalbp = precioVentabp-costoVariableUnitbp;
    let puntoEquilibriobp = costoFijobp /contribMarginalbp
}


informacionActual()
informacionBP()
calculoActual()
calculoBp()


if (contribMarginalac<=0) {
    let breakCost = prompt("¿Se encuentra en proceso de estructuracion?"   );
    if (breakCost=="si"){
        alert ("analizar estructura fijas de costos")
    }
    else{
        alert ("NO CUBRIMOS LOS COSTOS VARIABLES CON LA ESTRUCTURA ACTUAL")    }

} else{
    console.log("La contribucion marginal es:" + " "+ contribMarginalac)

}

if (contribMarginalbp<=0) {
    let breakCost = prompt("¿Se encuentra en proceso de estructuracion?"   );
    if (breakCost=="si"){
        alert ("analizar estructura fijas de costos")
    }
    else{
        alert ("NO CUBRIMOS LOS COSTOS VARIABLES CON LA ESTRUCTURA ACTUAL")    }

} else{
    console.log("La contribucion marginal es:" + " "+ contribMarginalbp)

}



//Retomar cuando no corresponda a un numero 

if(isNaN(informacionActual)){
    alert ("no corrresponde a un caracter valido");
    return 
} else{
    console.log("La contribucion marginal es:" + " "+ contribMarginalac)
}


if(isNaN(informacionBP)){
    alert ("no corrresponde a un caracter valido");
    return 
} else{
    console.log("La contribucion marginal es:" + " "+ contribMarginalbp)
}



//Objetos

const GranEstructura


