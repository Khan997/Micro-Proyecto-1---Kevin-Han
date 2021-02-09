


var actual = 0


function cambiarImagen() {

	if (actual == 0){
		document.getElementById("azir").src="hero3.jpg";
		actual = 1;
	} else if (actual == 1 ) {
			document.getElementById("azir").src="hero2.jpg";
			actual = 2;
		}else {
			document.getElementById("azir").src="hero1.jpg";
			actual = 0;
		}
	
}

function cambiarImagen2() {

	if (actual == 0){
		document.getElementById("azir").src="hero1.jpg";
		actual = 1;
	} else if (actual == 1 ) {
			document.getElementById("azir").src="hero2.jpg";
			actual = 2;
		}else {
			document.getElementById("azir").src="hero3.jpg";
			actual = 0;
		}
	}

window.addEventListener("load",function(){

    var json = { "css": "40%",
 "html": "90%",
 "Javascript": "50%",
 "haskell": "50%",
 "python" : "70%",
 "firebase" : "10%",
 "angular" : "20%",
 "java" : "50%",
}

console.log("");

var css = document.getElementById("cuadrocss");
var html = document.getElementById("cuadrohtml");
var Jsbar = document.getElementById("cuadrojs");
var python = document.getElementById("cuadropython");
var firebase = document.getElementById("cuadrofirebase");
var angular = document.getElementById("cuadroangular");
var haskell = document.getElementById("cuadrohaskell");


css.style.width = json.css;
html.style.width = json.html;
Jsbar.style.width = json.Javascript;
haskell.style.width = json.haskell;
firebase.style.width = json.firebase;
angular.style.width = json.angular;
python.style.width = json.python;
java.style.width = json.java;

css.innerText = json.css;
html.innerText = json.html;
Jsbar.innerText = json.Javascript;
angular.innerText = json.angular;
firebase.innerText = json.firebase;
python.innerText = json.python;
java.innerText = json.java;
haskell.innerText = json.haskell;
});

document.getElementById("envio").onclick = function(){

    if(document.getElementById("nombre").value !="" && document.getElementById("nombre").value !=null &&
        document.getElementById("correo").value != "" && document.getElementById("correo").value != null &&
        document.getElementById("mensaje").value!="" && document.getElementById("mensaje").value!=null &&
        document.getElementById("telefono").value!="" && document.getElementById("telefono").value!=null) {

        console.log("Su nombre es: " + document.getElementById("nombre").value);
        console.log("Su telefono es: " + document.getElementById("telefono").value);
        console.log("Su correo es: " + document.getElementById("correo").value);
        console.log("Su mensaje es: " + document.getElementById("mensaje").value);
        alert("He recibido tu mensaje!, te respondo cuando lo vea!")
    } else{
        alert("Por favor rellenar todo los cuadros de informacion")}
};
