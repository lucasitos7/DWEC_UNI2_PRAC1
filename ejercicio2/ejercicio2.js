var num=prompt("Introduce numero de numeros a crear entre 0 y 99999");
var numeros=[];
var numeros2=[];
var intentos=0;

if((esEntero(num)) && (esPositivo(num)) && (num!=null && num!="")){
    numeros=generaArray(num,0,99999);
    intentos=generaGanador();
    alert("Numeros de nuneros hasta encontrar el premiado "+intentos);
}
else
    alert("No es entero positive :)");


function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function generaArray(cantidadNum, min, max){
    for(var i=0;i<cantidadNum;i++){
        numeros.push(generaAleatorio(min,max));
    }
    //alert(numeros);
    return numeros;
    
}

function generaGanador(){
    var ganador=0;
    var conta=0;
    for(var i=0;i<999999;i++){
        conta++;
        ganador=generaAleatorio(0,99999);
        //alert(conta+" "+ ganador);
        for(var j=0;j<numeros.length;j++){
            if(numeros[j]==ganador){
                //alert(conta);
                return conta;
            }
        }

    }
}


function esEntero(numero){
    if(numero%1==0)
        return true;
}
function esPositivo(numero){
    if(numero>=0){
        return true;
    }
}