document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const mxnInput = document.getElementById('mxnInput');
    const usdOutput = document.getElementById('usdOutput');
    const btnConvertir = document.getElementById('btnConvertir');
    const mensajeError = document.getElementById('mensajeError');

    // Tasa de cambio definida en el problema
    const TASA_DE_CAMBIO = 0.055;

    btnConvertir.addEventListener('click', () => {
        // Limpiar mensaje de error y salida anterior
        mensajeError.textContent = '';
        usdOutput.value = '';

        // Capturar el valor como texto para validar si está vacío
        const valorTexto = mxnInput.value.trim();

        // 1. Validar que el campo no esté vacío
        if (valorTexto === '') {
            mensajeError.textContent = 'El campo no puede estar vacío.';
            return; // Detener la ejecución
        }

        // Convertir el texto a número
        const mxn = Number(valorTexto);

        // 2. Validar que sea numérico (redundante por el input type="number", pero buena práctica)
        if (isNaN(mxn)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            return;
        }

        // 3. Validar que sea un número positivo
        if (mxn < 0) {
            mensajeError.textContent = 'La cantidad debe ser un número positivo.';
            return;
        }

        // Realizar la conversión
        const usd = mxn * TASA_DE_CAMBIO;

        // Mostrar el resultado en el input readonly redondeado a 2 decimales
        usdOutput.value = usd.toFixed(2);
    });
});