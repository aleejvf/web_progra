var product = {
    image: "ruta_de_la_imagen.jpg",
    type: "anillo",
    size: "grande",
    centimeters: "5",
    money: "50",
    description: "Descripción del producto"
};

function validateModifyForm() {
    var image = document.getElementById("imageMod").files[0];
    var type = document.getElementById("typeMod").value ;
    var size = document.getElementById("TamañoMod").value  ;
    var centimeters = document.getElementById("centimetersMod").value ;
    var money = document.getElementById("moneyMod").value;
    var description = document.getElementById("descriptionMod").value ;

    var isValid = true;

    // Limpiar mensajes de error anteriores
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(element) {
        element.textContent = '';
    });

    // Validar que se adjunte una imagen
    if (!image) {
        document.getElementById("image-errorMod").textContent = "Por favor, adjunte una imagen.";
        isValid = false;
    }

    // Validar que se seleccione una opción en tipo
    if (type === "") {
        document.getElementById("type-errorMod").textContent = "Por favor, seleccione un tipo.";
        isValid = false;
    }

    // Validar que se seleccione una opción en tamaño
    if (size === "") {
        document.getElementById("size-errorMod").textContent = "Por favor, seleccione un tamaño.";
        isValid = false;
    }

    // Validar que el campo de centímetros no esté vacío y sea un número positivo
    if (centimeters === "" || isNaN(centimeters) || centimeters <= 0) {
        document.getElementById("centimeters-errorMod").textContent = "Por favor, ingrese un valor válido para los centímetros.(solo numero sin unidad de medida y positivos)";
        isValid = false;
    }

    // Validar que el campo de dinero no esté vacío y sea un número positivo
    if (money === "" || isNaN(money) || money <= 0) {
        document.getElementById("money-errorMod").textContent = "Por favor, ingrese un valor válido para el dinero.(solo numero)";
        isValid = false;
    }

    // Validar que la descripción no esté vacía
    if (description === "") {
        document.getElementById("description-errorMod").textContent = "Por favor, ingrese una descripción.";
        isValid = false;
    }

    return isValid;
}
