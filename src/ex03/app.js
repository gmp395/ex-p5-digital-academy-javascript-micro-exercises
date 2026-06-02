//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.BREAKDOWN:
//1.Inicialización/Entrada:Pedir al usuario que introduzca 3 números y guardarlos en 3 variables distintas (por ejemplo: num1, num2 y num3).
//2.Procesamiento(La lógica): Comparar los números entre sí para encontrar el mayor.¿Cómo? Si num1 es mayor que num2 y también mayor que num3, entonces num1 es el mayor. Si no, se prueba con los otros.
//3.Almacenamiento: Guardar el número ganador en una variable (por ejemplo: numeroMayor).
//4.Salida: Mostrar en pantalla el mensaje: "El número mayor es: " + numeroMayor.

const formulario = document.getElementById("compareForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const numA = Number(document.getElementById("inputA").value);
    const numB = Number(document.getElementById("inputB").value);
    const numC = Number(document.getElementById("inputC").value);

    const mayor = Math.max(numA, numB, numC);

    resultado.textContent = "El número mayor es:" + mayor;
});