let verificar = true;
const valores = {
    "e" :"enter",
    "i" :"imes",
    "a" :"ai",
    "o" : "ober",
    "u" :"ufat"
};

function encript(texto){
    console.log(texto.length);
    if(texto.length > 0){
        if(verificar == true){    
            document.getElementById("mostrar").style.display = "none";
            document.getElementById("oculto").style.display = "block";
            verificar = false;
        }

        for(let key in valores){
            if(valores.hasOwnProperty(key)){
                texto = texto.replaceAll(key, valores[key]);
            }
        }
        document.getElementById("devolver-texto").textContent = texto;
    }

    else{
        document.getElementById("cambio-texto").textContent="No te quieras pasar de listo manito";
    }
}

function decript(texto){
    console.log(texto);
    if(texto.length > 0){
        if(verificar == true){    
            
            document.getElementById("animacion").style.animation
            document.getElementById("mostrar").style.display = "none";
            document.getElementById("oculto").style.display = "block";
            verificar = false;
        }
    
        for(let key in valores){
            if(valores.hasOwnProperty(key)){
                texto = texto.replaceAll(valores[key],key);
            }
        }
        document.getElementById("devolver-texto").textContent = texto;
    }
    else{
        document.getElementById("cambio-texto").textContent="No te quieras pasar de listo manito";
    }

}

function copy() {
    let copyText = document.querySelector("#devolver-texto");
    copyText.select();
    document.execCommand("copy");
}