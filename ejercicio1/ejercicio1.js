var txtModi=null;
var texto="";

while((texto!="ESC") && (texto!="esc")){
        texto=prompt("Introducir frase para dar la vuelta");
        if(texto=="ESC" || texto=="esc"){
            alert("Fin del programa");
        }
        else{
            txtModi=modiTexto(texto);
            alert(txtModi);
        }

    
}

function modiTexto(txt){
    var textoModi=txt.split(" ").reverse().join(" ").split("").reverse().join("");
    return textoModi;
}