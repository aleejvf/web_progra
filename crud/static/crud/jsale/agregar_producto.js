function validateForm() {
    var image = document.getElementById("image").files[0]; // Obtener el archivo de imagen
    var type = document.getElementById("type").value;
    var size = document.getElementById("Tamaño").value;
    var centimeters = document.getElementById("centimeters").value;
    var money = document.getElementById("money").value;
    var description = document.getElementById("description").value;

    var isValid = true;

    // Limpiar mensajes de error anteriores
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(element) {
        element.textContent = '';
    });

    // Validar que se adjunte una imagen
    if (!image) {
        document.getElementById("image-error").textContent = "Por favor, adjunte una imagen.";
        isValid = false;
    }

    // Validar que se seleccione una opción en tipo
    if (type === "") {
        document.getElementById("type-error").textContent = "Por favor, seleccione un tipo.";
        isValid = false;
    }

    // Validar que se seleccione una opción en tamaño
    if (size === "") {
        document.getElementById("size-error").textContent = "Por favor, seleccione un tamaño.";
        isValid = false;
    }

    // Validar que el campo de centímetros no esté vacío y solo contenga números positivos
    if (centimeters === "" || isNaN(centimeters) || centimeters <= 0) {
        document.getElementById("centimeters-error").textContent = "Por favor, ingrese un valor válido para los centímetros.(solo numero sin unidad de medida y positivos)";
        isValid = false;
    }
    

    // Validar que el campo de dinero no esté vacío y sea un número positivo
    if (money === "" || isNaN(money) || money <= 0) {
        document.getElementById("money-error").textContent = "Por favor, ingrese un valor válido para el dinero.(solo numero)";
        isValid = false;
    }

    // Validar que la descripción no esté vacía
    if (description === "") {
        document.getElementById("description-error").textContent = "Por favor, ingrese una descripción.";
        isValid = false;
    }

    // Si pasa todas las validaciones, retornar true para enviar el formulario
    return isValid;
}

function submitForm() {
    if (validateForm() === true) {
        $('#modifyConfirmationModal').modal('show');
    }
}
