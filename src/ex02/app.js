//Escribe un programa que pida el nombre del usuario 
//con un input y escriba un texto que diga “Hola <nombre-de-usuario>
//1.Input que pida texto (nombre de usuario como placeholder)
//2.Introducir nombre
//3.Script que recoja este nombre
//4.Devolver un texto que diga "Hola + nombre introducido"

function saludar() {
    // 1. Vamos a buscar lo que el usuario lleva escrito hasta ahora
    let dato = document.getElementById("name").value;
    
    // 2. Si la caja no está vacía, pintamos el saludo. Si está vacía, limpiamos el texto.
    if (dato === "") {
        document.getElementById("resultadoSaludo").innerText = "";
    } else {
        document.getElementById("resultadoSaludo").innerText = "Hola " + dato;
    }
}