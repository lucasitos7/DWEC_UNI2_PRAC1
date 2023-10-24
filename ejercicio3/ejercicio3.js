const equipos=["Alaves","Atl.Madrid","Villareal","Barcelona","Real Madrid","Getafe","Español","Real Oviedo","Sevilla","Levante",
                "Valencia","Betis","Celta","Atl.Bilbao","Real Sociedad","Rayo Vallecano","Osasuna","Mallorca","Cadiz","Granada"];
const result=[1,"X",2];
var quinielas=[];

muestraEquipos(equipos);

quinielas=generaResultados(quinielas);
quiniela(equipos);

muestraDatos(equipos,quinielas);

function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}
function generaSimbolo(){
    var simbolo=generaAleatorio(0,1);
    if(simbolo==0)
        simbolo="X";
    else if(simbolo==1)
        simbolo="1";
    else
        simbolo="0";
    
    return simbolo;
}
function muestraEquipos(equipos){
    /*var conta=1;
    var texto="";
    for(var i=0;i<equipos.length;i++){
        texto=texto+"Equipo "+conta+": "+equipos[i]+"\n";
        conta++;
    }*/
    console.table(equipos);
}
function generaResultados(quinielas){
    for (let i = 0; i < equipos.length; i++) {
        quinielas[i] = [];
        for (let j = 0; j < equipos.length; j++) {
          quinielas[i][j] = generaSimbolo();
        }
    }
    return quinielas;
}
function quiniela(equipos){
    console.table(quinielas);
}
function muestraDatos(equipos,quinielas){
    let auxL= null;
    let auxV= null;
    let cerrar="no";
    while (cerrar!="si"){
        let eqLocal=prompt("Equipo local");
        let eqVisi=prompt("Equipo visitante");
        for (let i = 0; i < equipos.length; i++) {
            if(eqLocal===equipos[i])
                auxL=i;
            if(eqVisi===equipos[i])
                auxV=i;
        }
        if(auxL!=null && auxV!=null){
            console.log(quinielas[auxL][auxV]);
            alert(quinielas[auxL][auxV]);
        }
        else
            alert("Los equipos no existen");
            console.log("Los equipos no existen");

        cerrar=prompt("Quieres salir ('si' para cerrar)");
    }
    

}
