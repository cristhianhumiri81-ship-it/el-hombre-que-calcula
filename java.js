

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let total = Number(document.getElementById("total").value);

    let num1 = Number(document.getElementById("num1").value);
    let den1 = Number(document.getElementById("den1").value);

    let num2 = Number(document.getElementById("num2").value);
    let den2 = Number(document.getElementById("den2").value);

    let num3 = Number(document.getElementById("num3").value);
    let den3 = Number(document.getElementById("den3").value);

    let resultado = document.getElementById("resultado");

    if (total <= 0 || !Number.isInteger(total) ||
        num1 < 0 || num2 < 0 || num3 < 0 ||
        den1 <= 0 || den2 <= 0 || den3 <= 0 ||
        !Number.isInteger(num1) || !Number.isInteger(num2) ||
        !Number.isInteger(num3) || !Number.isInteger(den1) ||
        !Number.isInteger(den2) || !Number.isInteger(den3)) {

        resultado.textContent = "Error: ingresa números enteros válidos.";
        return;
    }

    let recibe1 = Math.round(total * num1 / den1);
    let recibe2 = Math.round(total * num2 / den2);
    let recibe3 = Math.round(total * num3 / den3);

    let fracciones = num1 / den1 + num2 / den2 + num3 / den3;
    let sobrantes = total - recibe1 - recibe2 - recibe3;

    let mensaje = "Total de camellos: " + total + "\n";
    mensaje += "Heredero 1 recibe: " + recibe1 + " camellos\n";
    mensaje += "Heredero 2 recibe: " + recibe2 + " camellos\n";
    mensaje += "Heredero 3 recibe: " + recibe3 + " camellos\n";

    if (fracciones > 1) {
        mensaje += "Error: las fracciones superan la herencia total.";
    } else if (sobrantes > 0) {
        mensaje += "Sobran " + sobrantes + " camellos.";
    } else if (sobrantes < 0) {
        mensaje += "El reparto supera la cantidad disponible.";
    } else {
        mensaje += "El reparto es exacto. No sobran camellos.";
    }

    resultado.textContent = mensaje;

});






document.getElementById("formularioMerienda").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let bebida = document.getElementById("bebida").value;
    let tazas = Number(document.getElementById("tazas").value);

    let precio = 0;
    let resultado = document.getElementById("resultadoMerienda");

    if (nombre.trim() === "" || tazas <= 0 || !Number.isInteger(tazas)) {
        resultado.textContent = "Ingresa un nombre y una cantidad válida de tazas.";
        return;
    }

    switch (bebida) {
        case "te":
            precio = 5;
            break;

        case "cafe":
            precio = 8;
            break;

        case "jugo":
            precio = 6;
            break;

        case "chocolate":
            precio = 10;
            break;

        default:
            resultado.textContent = "Selecciona una bebida.";
            return;
    }

    let subtotal = precio * tazas;
    let descuento = 0;

    if (subtotal >= 50) {
        descuento = subtotal * 0.10;
    }

    let total = subtotal - descuento;

    resultado.textContent =
        "Invitado: " + nombre + "\n" +
        "Precio por taza: " + precio + " Bs\n" +
        "Cantidad de tazas: " + tazas + "\n" +
        "Subtotal: " + subtotal + " Bs\n" +
        "Descuento: " + descuento + " Bs\n" +
        "Total a pagar: " + total + " Bs";
});







document.getElementById("formularioRaices").addEventListener("submit", function(event) {

    event.preventDefault();

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let resultado = document.getElementById("resultadoRaices");

    if (a === 0) {
        resultado.textContent = "El valor de a no puede ser cero.";
        return;
    }

    let D = b * b - 4 * a * c;

    if (D > 0) {

        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);

        resultado.textContent =
            "La ecuación tiene dos raíces reales.\n" +
            "Raíz 1: " + x1 + "\n" +
            "Raíz 2: " + x2;

    } else if (D === 0) {

        let x = -b / (2 * a);

        resultado.textContent =
            "La ecuación tiene una raíz real.\n" +
            "Raíz: " + x;

    } else {

        resultado.textContent =
            "La ecuación no tiene raíces reales.";

    }

});







document.getElementById("formularioPi").addEventListener("submit", function(event) {

    event.preventDefault();

    let N = Number(document.getElementById("terminos").value);
    let resultado = document.getElementById("resultadoPi");

    if (N <= 0 || !Number.isInteger(N)) {
        resultado.textContent = "Ingresa un número entero mayor que cero.";
        return;
    }

    let suma = 0;

    for (let n = 1; n <= N; n++) {
        suma = suma + 1 / (n * n);
    }

    let piAproximado = Math.sqrt(6 * suma);

    resultado.textContent =
        "Cantidad de términos: " + N + "\n" +
        "PI aproximado: " + piAproximado + "\n" +
        "Valor de PI: " + Math.PI + "\n" +
        "Diferencia: " + Math.abs(Math.PI - piAproximado);

});
