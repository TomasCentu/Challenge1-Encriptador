//  tiene que agarrar las vocales y cambiarlas por unos caracteres especificos
//  al no ingresar nada en el texto-input tiene que volver a aparecer la imagen de "texto no encontrado"  *no salio*

// para ocultar la imagen de "texto no encontrado" y demas contenido
function ocultarLadoDerecho() {

	document.querySelector(".munieco").style.display = "none";
	document.querySelector(".info2").style.display = "none";
}

// para mostrar el boton de copiar
function mostrarBotonCopy() {

	document.querySelector(".boton-copy").style.display = "show";
	document.querySelector(".boton-copy").style.display = "inherit";

    document.querySelector(".texto-salida").style.height = "55%";
    document.querySelector("aside").style.width = "340px";
}

var final = String; // aca se va a guardar el texto encriptado/desencriptado por si quiere ser copiado

// para el boton de encriptar
function encriptar() {

    ocultarLadoDerecho();
    mostrarBotonCopy();
    
    var texto = document.querySelector('.texto-input').value;
    
    // cambio de vocales a caracteres
    var txtcifrado = texto.replace(/e/igm,"enter");
    txtcifrado = txtcifrado.replace(/o/igm,"ober");
    txtcifrado = txtcifrado.replace(/i/igm,"imes");
    txtcifrado = txtcifrado.replace(/a/igm,"ai");
    txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    
    document.querySelector(".texto-salida").innerHTML = txtcifrado;

    final = document.querySelector(".texto-salida").value;
}

// para el boton de desencriptar
function desencriptar() {

    ocultarLadoDerecho();
	mostrarBotonCopy();

	var texto = document.querySelector('.texto-input').value;
	
    // cambio de caracretes a vocales
    var txtcifrado = texto.replace(/enter/igm,"e");
	txtcifrado = txtcifrado.replace(/ober/igm,"o");
	txtcifrado = txtcifrado.replace(/imes/igm,"i");
	txtcifrado = txtcifrado.replace(/ai/igm,"a");
	txtcifrado = txtcifrado.replace(/ufat/igm,"u");

	document.querySelector(".texto-salida").innerHTML = txtcifrado;

    final = document.querySelector(".texto-salida").value;
}

// boton de copiar texto-salida
function copiar() {

    var resultado = final;
    navigator.clipboard.writeText(resultado);	
}