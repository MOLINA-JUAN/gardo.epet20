//#region 
const nombre = "Molina";
let compraJ = "alimento";
var precioA = 500;
let array = [`Juan Molina`,`Lagos Maximo`,`Jeremiaz Lopez`, `Franco Mendez`];
var an = 6;
var bn = 8;
//#endregion
//#region 
function sumar (an,bn){
    return an + bn;
}
function restar (an,bn){
    return an - bn;
}
function div (an,bn){
    return an / bn;
}
function mul (an,bn){ //funcion de la multiltiplicacion
    return an * bn;
}
//#endregion
//#region 
    console.log(sumar(an,bn));
    console.log(restar(an,bn));
    console.log(div(an,bn));
    console.log(mul(an,bn));
    console.log(nombre);
    console.log(compraJ);
    console.log(precioA);
//#endregion
//#region 
    for(x=0;x<4;x++){
        console.log(array[x]);
    }
//#endregion