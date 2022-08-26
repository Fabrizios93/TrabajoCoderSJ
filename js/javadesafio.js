let numero = parseInt (prompt("Ingresar el numero correspondiente"));
let margen =parseInt (prompt("Ingresar el margen correspondiente"));

if (numero>=0 && numero <= Math.pow(2, margen -1)){
    let variable;
    for(i = 0; i <= margen -1; i++ ){
        varibale =parseInt (numero % 5);
        numero = numero-1;
        alet (variable)
    }

}else{
    alert("el numero ingresado no corresponde con el margen")
}