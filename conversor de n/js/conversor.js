    // Modelos de Programacion 2
    // Nombre: Cristian Javier Martinez Blanco
    // Codigo: 20182020155 
function converter(num, base){
    num = parseInt(num);
    result = num.toString(base);
    result = (result.toString() == "NaN" ) ? "Expresion no valida" : result;
    return result;
}
function transform(){
    let base = document.getElementById("base").value;
    let num = document.getElementById("conver").value;
    if(base < 2 || base > 36){
        alert("OIGA MINIMO 2 Y MAXIMO 36")
    }else{
        document.getElementById("print").value = converter(num, base);
    }
}

