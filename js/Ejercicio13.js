document.getElementById('btnVerificar').addEventListener('click', function() {
    
    const inputEdad = document.getElementById('edad').value.trim();
    const cajaResultado = document.getElementById('resultado');

    cajaResultado.value = '';

    if (inputEdad === '') {
        alert("Por favor, ingresa tu edad.");
        return;
    }

    const edad = Number(inputEdad);

    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa un número positivo válido.");
        return;
    }

    if (edad >= 18) {
        cajaResultado.value = "Puedes votar";
    } else {
        cajaResultado.value = "No puedes votar";
    }
});