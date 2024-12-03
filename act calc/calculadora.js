function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: División por cero no permitida.";  // Esta línea estaba correcta.
        }
    } else {
        return "Error: Operación no válida.";  // También estaba correcta.
    }
}

// Función para simular las pruebas
function pruebaCalculadora() {
    // Prueba de suma
    let resultado = realizarOperacion(5, 3, "suma");
    console.log(`Prueba de suma (5 + 3): ${resultado === 8 ? 'Correcto' : 'Incorrecto'}`);

    // Prueba de resta
    resultado = realizarOperacion(10, 7, "resta");
    console.log(`Prueba de resta (10 - 7): ${resultado === 3 ? 'Correcto' : 'Incorrecto'}`);

    // Prueba de multiplicación
    resultado = realizarOperacion(4, 6, "multiplicacion");
    console.log(`Prueba de multiplicación (4 * 6): ${resultado === 24 ? 'Correcto' : 'Incorrecto'}`);

    // Prueba de división
    resultado = realizarOperacion(12, 4, "division");
    console.log(`Prueba de división (12 / 4): ${resultado === 3 ? 'Correcto' : 'Incorrecto'}`);

    // Prueba de división por cero
    resultado = realizarOperacion(10, 0, "division");
    console.log(`Prueba de división por cero (10 / 0): ${resultado === "Error: División por cero no permitida." ? 'Correcto' : 'Incorrecto'}`);

    // Prueba de entrada inválida
    resultado = realizarOperacion("abc", "xyz", "suma");
    console.log(`Prueba de entrada inválida ('abc' y 'xyz' en suma): ${isNaN(resultado) ? 'Correcto' : 'Incorrecto'}`);

    // Mensaje de despedida
    console.log("Operaciones finalizadas. ¡Hasta luego!");
}

// Ejecutar la prueba
pruebaCalculadora();