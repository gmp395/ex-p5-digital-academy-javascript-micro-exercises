//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a. BREAKDOWN
//1.Inicialización/Entrada: Pedir al usuario que introduzca una frase
//2.Procesamiento(La lógica): Crear un bucle (un ciclo) que recorra la frase desde la primera letra hasta la última.
//En cada letra, hacer una pregunta: ¿Esta letra es una 'a' (o 'A')?
//Si la respuesta es sí: Sumar 1 al contador numeroLetraA.
//Si la respuesta es no: No hacer nada y pasar a la siguiente letra.
//3.Almacenamiento: guardar rl numeo obtenido en una variable llamada númeroLetraA
//4.Salida: Mostrar en pantalla el mensaje: "El número total de letras a es: " + numeroLetraA

function contarLetras() {
    let frase = document.getElementById("fraseUsuario").value.toLowerCase();
    let contador = 0;
    
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === 'a' || frase[i] === 'á') { 
            contador++;
        }
    }

    document.getElementById("resultado").innerText = 
        `La letra 'a' aparece ${contador} veces en la frase.`;
}