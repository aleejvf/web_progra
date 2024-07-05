
function validarFormulario() {
    var nombre = document.getElementById("nombrep").value;
    var apellido = document.getElementById("lastNamep").value;
    var email = document.getElementById("emailp").value;
    var rut = document.getElementById("rutp").value;
    var direccion = document.getElementById("addressp").value;
    var codigoPostal = document.getElementById("zipp").value;
    var nombreTitular = document.getElementById("cc-name").value;
    var numeroTarjeta = document.getElementById("cc-number").value;
    var fechaVencimiento = document.getElementById("cc-expiration").value;
    var cvv = document.getElementById("cc-cvv").value;

    var formularioValido = true;

    var soloLetras = /^[a-zA-Z\s]*$/;
    var formatoRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    var soloNumeros = /^[0-9]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar nombre
    if (nombre === "") {
        document.getElementById("mensaje_nombre").textContent = "Por favor, ingresa tu nombre.";
        formularioValido = false;
    } else if (!soloLetras.test(nombre) || nombre.length < 2) {
        document.getElementById("mensaje_nombre").textContent = "Nombre inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_nombre").textContent = "";
    }

    // Validar apellido
    if (apellido === "") {
        document.getElementById("mensaje_apellido").textContent = "Por favor, ingresa tu apellido.";
        formularioValido = false;
    } else if (!soloLetras.test(apellido) || apellido.length < 2) {
        document.getElementById("mensaje_apellido").textContent = "Apellido inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_apellido").textContent = "";
    }

    // Validar email 
    if (!emailRegex.test(email)) {
        document.getElementById("mensaje_email").textContent = "Por favor, ingrese un correo electrónico válido.";
        isValid = false;
    }else {
        document.getElementById("mensaje_email").textContent = "";
    }

    // Validar rut
    if (rut === "") {
        document.getElementById("mensaje_rut").textContent = "Por favor, ingresa tu RUT.";
        formularioValido = false;
    } else if (!formatoRut.test(rut)) {
        document.getElementById("mensaje_rut").textContent = "RUT inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_rut").textContent = "";
    }

    // Validar dirección
    if (direccion === ""||direccion.length<=3) {
        document.getElementById("mensaje_direccion").textContent = "Por favor, ingresa tu dirección.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_direccion").textContent = "";
    }

    // Validar código postal
    if (codigoPostal === "" || !soloNumeros.test(codigoPostal) || codigoPostal.length != 7) {
        document.getElementById("mensaje_codigo_postal").textContent = "Código postal inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_codigo_postal").textContent = "";
    }
    // Validar nombre TITULAR
    if (nombreTitular === "") {
        document.getElementById("mensaje_nombretitu").textContent = "Por favor, ingresa el nombre del titular.";
        formularioValido = false;
    } else if (!soloLetras.test(nombreTitular) || nombreTitular.length < 2) {
        document.getElementById("mensaje_nombretitu").textContent = "Nombre inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_nombretitu").textContent = "";
    }
    // Validar numero tarjeta
    if (numeroTarjeta === "" || !soloNumeros.test(numeroTarjeta) || numeroTarjeta.length != 16) {
        document.getElementById("mensaje_cc_number").textContent = "Numero de la tarjeta es inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_cc_number").textContent = "";
    }
    // Validar cCVV
    if (cvv === "" || !soloNumeros.test(cvv) || cvv.length != 3) {
        document.getElementById("mensaje_cc_cvv").textContent = "Código CVV invalido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_cc_cvv").textContent = "";
    }
     // Validar que la fecha de vencimiento no esté vacía
     if (fechaVencimiento === '') {
        document.getElementById('mensaje_cc_expiration').innerHTML = '¡Por favor ingrese una fecha de vencimiento!';
        formularioValido = false;
        return;
    }
    
    var fechaActual = new Date();
    var fechaIngresada = new Date(fechaVencimiento);

    // Validar si la fecha ingresada es mayor que la fecha actual
    if (fechaIngresada <= fechaActual) {
        document.getElementById('mensaje_cc_expiration').innerHTML = '¡La fecha de vencimiento debe ser mayor que la fecha actual!';
        formularioValido = false;
        return;
    }

    // Si pasa las validaciones, borrar cualquier mensaje de error anterior
    document.getElementById('mensaje_cc_expiration').innerHTML = '';

    return formularioValido;
    }
