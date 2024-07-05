

// FORMULARIO DE MODIFICAR USUARIO //
//////////////////////////////////////////////////////////////////SOLO FALTA LO DE CLAVE/////////////////////////////////////////////////////////////////////////////////////
function validarFormularioModificar() {
    // Obtener los campos del formulario
    var formulario = document.getElementById("formulario_modificar_perfil");
    var nombre_usuario = formulario.elements["username"].value;  // Ejemplo de campo "nombre"
    var nombre = formulario.elements["first_name"].value;  // Ejemplo de campo "nombre"
    var apellido = formulario.elements["last_name"].value;  // Ejemplo de campo "nombre"
    var celular = formulario.elements["celular"].value;  // Ejemplo de campo "nombre"
    var correo = formulario.elements["email"].value;  // Ejemplo de campo "nombre"
    var direccion = formulario.elements["direccion"].value;  // Ejemplo de campo "nombre"
    var postal_code = formulario.elements["postal"].value;  // Ejemplo de campo "nombre"
    var clave = formulario.elements["password"].value;  // Ejemplo de campo "nombre"


    if (nombre_usuario.trim() === "" || nombre_usuario.length <= 2) {
        alert("El campo nombre de usuario es obligatorio.");
        return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero2 = false;   
        for (var i = 0; i < nombre_usuario.length; i++) {
            if (!isNaN(parseInt(nombre_usuario[i]))) {
               buscarnumero2 = true;
            break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero2) {
            alert("No puede tener numeros.");
            return false;
        }
    }

    if (nombre.trim() === "" || nombre.length <= 2) {
            alert("El campo nombre es obligatorio.");
            return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero = false;   
        for (var i = 0; i < nombre.length; i++) {
            if (!isNaN(parseInt(nombre[i]))) {
                   buscarnumero = true;
                break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero) {
            alert("No puede tener numeros.");
            return false;
        }
    }


    if (apellido.trim() === "" || apellido.length <= 2) {
        alert("El campo apellido es obligatorio.");
        return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero1 = false;   
        for (var i = 0; i < apellido.length; i++) {
            if (!isNaN(parseInt(apellido[i]))) {
               buscarnumero1 = true;
            break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero1) {
            alert("No puede tener numeros.");
            return false;
        }
    }

    
    // Verificar si el número de celular tiene exactamente 8 dígitos
    if (celular.length !== 8 || isNaN(celular) || celular <1) {
        alert("El número de celular no es valido.");
        return false;
    }

    
    // Expresión regular para validar el formato de la dirección de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar si el correo electrónico tiene un formato válido
    if (!regex.test(correo)) {
        alert("El formato del correo electrónico no es válido.");
        return false;
    }

    // Realizar validación de direccion
    if (direccion.trim() === ""|| direccion.length <= 3) {
        alert("Debe llenar la información.");
        return false; // Evita que el formulario se envíe
    }

    
    // Verificar si el número de celular tiene exactamente 8 dígitos
    if (postal_code.length !== 7 || isNaN(postal_code) || postal_code <1) {
        alert("El codigo postal no es valido.");
        return false;
    }

    // Si pasa todas las validaciones, enviar el formulario
    formulario.submit();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////CANTIDAD DE PRODUCTOS POR BOTONES//////////
function menos(){
    let numero= parseInt(document.getElementById("aux").value);
    if(numero <=1){
        alert("Ya no es posible restar mas productos")
    } else{
        numero = numero-1;
        document.getElementById("aux").value = numero;
        document.getElementById("contador").value = numero;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////CANTIDAD DE PRODUCTOS POR BOTONES//////////
function mas(){
    let numero= parseInt(document.getElementById("aux").value);
        numero = numero+1;
        document.getElementById("aux").value = numero;
        document.getElementById("contador").value = numero;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////CANTIDAD DE PRODUCTOS POR input y teclado//////////
function cambiarValor() {
    // Obtener el valor actual del campo de entrada
    let numero = parseInt(document.getElementById("aux").value);

    // Verificar si el valor es un número válido
    if (!isNaN(numero) && numero>1) {
        // Incrementar el número en 1
        // Mostrar el número incrementado en el campo de salida (contador)
        document.getElementById("contador").value = numero;
    } else {
        // Manejar el caso en que el usuario ingrese algo que no sea un número
        alert("Por favor ingrese un número válido.");
    }
}
////////////////////////////////////////////////////////////////////////

///////////////////////////////// FORMULARIO DE PAGAR (CON CUENTA/SIN CUENTA) /////////////////////////
function formulario_pagar_s() {
    // Obtener los campos del formulario
    var formulario = document.getElementById("formulario_pagar_s");
    var rutInput = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("lastName").value;
    var celular = document.getElementById("idcelular").value;
    var correo = document.getElementById("email").value;
    var direccion = document.getElementById("address").value;
    var postal_code = document.getElementById("zip").value;
    var nombre_tarjeta = document.getElementById("idnombtarjeta").value;
    var numero_tarjeta = document.getElementById("idtarjeta").value;
    var fecha_vencimiento = document.getElementById("idfecha").value;
    var cvv = document.getElementById("idcvv").value;



    // Expresión regular para validar el formato del RUT
    var rutRegex = /^(\d{1,3}(\.\d{3})*)\-([\dkK])$/;
        
    // Si el RUT no cumple con el formato, muestra un mensaje de error
    if (!rutRegex.test(rutInput)) {
        alert("Formato de RUT inválido (Debe contener punto y guion).");
        return false;
    }
    
    // Si el RUT cumple con el formato, verifica el dígito verificador
    var rut = rutInput.replace(/\./g,'').split('-');
    var numRut = rut[0];
    var verificador = rut[1];
    
    var suma = 0;
    var multiplo = 2;
    
    // Itera sobre los dígitos del RUT, de derecha a izquierda
    for (var i = numRut.length - 1; i >= 0; i--) {
        suma += parseInt(numRut.charAt(i)) * multiplo;
        if (multiplo < 7) {
            multiplo++;
        }else{
            multiplo = 2;
        }
    }
    
    // Calcula el dígito verificador esperado
    var resto = suma % 11;
    var dvEsperado = 11 - resto;
    if (dvEsperado == 10) {
        dvEsperado = 'k';
    } else if (dvEsperado == 11) {
        dvEsperado = '0';
    }
    
    // Compara el dígito verificador esperado con el ingresado
    if (dvEsperado.toString() !== verificador.toLowerCase()) {
        alert("RUT inválido.");
        return false;
    }

    // Validación de nombre
    if (nombre.trim() === "" || nombre.length <= 2) {
            alert("El campo nombre es obligatorio.");
            return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero = false;   
        for (var i = 0; i < nombre.length; i++) {
            if (!isNaN(parseInt(nombre[i]))) {
                   buscarnumero = true;
                break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero) {
            alert("No puede tener numeros.");
            return false;
        }
    }

    // Validación de apellido
    if (apellido.trim() === "" || apellido.length <= 2) {
        alert("El campo apellido es obligatorio.");
        return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero1 = false;   
        for (var i = 0; i < apellido.length; i++) {
            if (!isNaN(parseInt(apellido[i]))) {
               buscarnumero1 = true;
            break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero1) {
            alert("No puede tener numeros.");
            return false;
        }
    }

    
    // Verificar si el número de celular tiene exactamente 8 dígitos
    if (celular.length !== 8 || isNaN(celular) || celular <1) {
        alert("El número de celular no es valido.");
        return false;
    }

    
    // Expresión regular para validar el formato de la dirección de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar si el correo electrónico tiene un formato válido
    if (!regex.test(correo)) {
        alert("El formato del correo electrónico no es válido.");
        return false;
    }

    // Realizar validación de direccion
    if (direccion.trim() === ""|| direccion.length <= 3) {
        alert("Ingrese la direccion.");
        return false; // Evita que el formulario se envíe
    }

    
    // Verificar si el número de celular tiene exactamente 8 dígitos
    if (postal_code.length !== 7 || isNaN(postal_code) || postal_code <1) {
        alert("El codigo postal no es valido.");
        return false;
    }


    // Validación de nombre del titular de tarjeta
    if (nombre_tarjeta.trim() === "" || nombre_tarjeta.length < 5) {
        alert("El nombre del titular de la tarjeta es obligatorio y debe tener al menos 5 caracteres.");
        return false;
    }

    // Validación de número de tarjeta
    if (numero_tarjeta.trim() === "" || numero_tarjeta.length !== 16 || isNaN(numero_tarjeta)) {
        alert("El número de tarjeta no es válido.");
        return false;
    }

    // Validación de fecha de vencimiento
    var regexFecha = /^\d{4}-(0[1-9]|1[0-2])$/;
    if (!regexFecha.test(fecha_vencimiento)) {
        alert("La fecha de vencimiento no es válida.");
        return false;
    }

    // Obtener la fecha actual en formato YYYY-MM
    var fechaActual = new Date().toISOString().slice(0, 7);

    // Verificar si la fecha de vencimiento es mayor o igual a la fecha actual
    if (fecha_vencimiento < fechaActual) {
        alert("La fecha de vencimiento debe ser mayor o igual a la fecha actual.");
        return false;
    }


    // Validación de CVV
    if (cvv === "" || cvv.length !== 3 || isNaN(cvv)) {
        alert("El CVV no es válido.");
        return false;
    }

    // Si pasa todas las validaciones, enviar el formulario
    formulario.submit();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////PARA BLOQUEAR LAS FECHAS PASADAS///////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la fecha actual
    var now = new Date();

    // Obtener el mes y año actual
    var month = (now.getMonth() + 1).toString().padStart(2, '0'); // El mes va de 0 a 11, por lo que se suma 1
    var year = now.getFullYear().toString();

    // Formatear la fecha actual en formato YYYY-MM
    var fecha_actual = year + '-' + month;

    // Asignar el valor mínimo al campo de fecha de vencimiento
    var inputFecha = document.getElementById("idfecha");
    inputFecha.min = fecha_actual;
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// FORMULARIO CREACION DE CUENTA /////////////////////////
function validar_Formulario() {
    // Obtener los campos del formulario
    var formulario = document.getElementById("validar_Formulario");
    var nombre_usuario = document.getElementById("nombre_usuario").value;  // Ejemplo de campo "nombre"
    var rutInput = document.getElementById("rut").value;  // Ejemplo de campo "nombre"
    var nombre = document.getElementById("nombre").value;  // Ejemplo de campo "nombre"
    var apellido = document.getElementById("lastName").value;  // Ejemplo de campo "nombre"
    var celular = document.getElementById("idcelular").value;  // Ejemplo de campo "nombre"
    var correo = document.getElementById("email").value;  // Ejemplo de campo "nombre"
    var direccion = document.getElementById("address").value;  // Ejemplo de campo "nombre"
    var postal_code = document.getElementById("zip").value;  // Ejemplo de campo "nombre"
    var contraseña1 = document.getElementById("contraseña1").value;  // Ejemplo de campo "nombre"
    var contraseña2 = document.getElementById("contraseña2").value;  // Ejemplo de campo "nombre"
    


    if (nombre_usuario.trim() === "" || nombre_usuario.length <= 2) {
        alert("El campo nombre de usuario es obligatorio.");
        return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero2 = false;   
        for (var i = 0; i < nombre_usuario.length; i++) {
            if (!isNaN(parseInt(nombre_usuario[i]))) {
               buscarnumero2 = true;
            break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero2) {
            alert("No puede tener numeros.");
            return false;
        }
    }


        //Validacion Rut//

    // Expresión regular para validar el formato del RUT
    var rutRegex = /^(\d{1,3}(\.\d{3})*)\-([\dkK])$/;
        
    // Si el RUT no cumple con el formato, muestra un mensaje de error
    if (!rutRegex.test(rutInput)) {
        alert("Formato de RUT inválido (Debe contener punto y guion).");
        return false;
    }

    // Si el RUT cumple con el formato, verifica el dígito verificador
    var rut = rutInput.replace(/\./g,'').split('-');
    var numRut = rut[0];
    var verificador = rut[1];

    var suma = 0;
    var multiplo = 2;

    // Itera sobre los dígitos del RUT, de derecha a izquierda
    for (var i = numRut.length - 1; i >= 0; i--) {
        suma += parseInt(numRut.charAt(i)) * multiplo;
        if (multiplo < 7) {
            multiplo++;
        }else{
            multiplo = 2;
        }
    }

    // Calcula el dígito verificador esperado
    var resto = suma % 11;
    var dvEsperado = 11 - resto;
    if (dvEsperado == 10) {
        dvEsperado = 'k';
    } else if (dvEsperado == 11) {
        dvEsperado = '0';
    }

    // Compara el dígito verificador esperado con el ingresado
    if (dvEsperado.toString() !== verificador.toLowerCase()) {
        alert("RUT inválido.");
        return false;   
    }


    if (nombre.trim() === "" || nombre.length <= 2) {
            alert("El campo nombre es obligatorio.");
            return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero = false;   
        for (var i = 0; i < nombre.length; i++) {
            if (!isNaN(parseInt(nombre[i]))) {
                   buscarnumero = true;
                break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero) {
            alert("No puede tener numeros.");
            return false;
        }
    }


    if (apellido.trim() === "" || apellido.length <= 2) {
        alert("El campo apellido es obligatorio.");
        return false; // Evita que el formulario se envíe
    }else{
        var buscarnumero1 = false;   
        for (var i = 0; i < apellido.length; i++) {
            if (!isNaN(parseInt(apellido[i]))) {
               buscarnumero1 = true;
            break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero1) {
            alert("No puede tener numeros.");
            return false;
        }
    }

    
    // Verificar si el número de celular tiene exactamente 8 dígitos
    if (celular.length !== 8 || isNaN(celular) || celular <1) {
        alert("El número de celular no es valido.");
        return false;
    }

    
    // Expresión regular para validar el formato de la dirección de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar si el correo electrónico tiene un formato válido
    if (!regex.test(correo)) {
        alert("El formato del correo electrónico no es válido.");
        return false;
    }

    // Realizar validación de direccion
    if (direccion.trim() === ""|| direccion.length <= 3) {
        alert("Debe llenar la información.");
        return false; // Evita que el formulario se envíe
    }
    
    // Verificar si el número de celular tiene exactamente 8 dígitos
    if (postal_code.length !== 7 || isNaN(postal_code) || postal_code <1) {
        alert("El codigo postal no es valido.");
        return false;
    }



    
    // Al menos 8 caracteres
    if (contraseña1.trim() === "" ||contraseña1.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
        } else if (contraseña1.length >= 8) {
            // Al menos un número
            var tieneNumero = false;
            for (var i = 0; i < contraseña1.length; i++) {
                if (!isNaN(parseInt(contraseña1[i]))) {
                    tieneNumero = true;
                    break; // Terminar el bucle una vez que se encuentre un número
                }
            }
            if (!tieneNumero) {
                alert("La contraseña debe contener al menos un número.");
                return false;
            }
        }
        
        if (contraseña2.trim() === ""){        
            alert("La contraseña no puede estar vacia.");
            return false;
        }else if(contraseña2!=contraseña1){
            alert("La contraseña deben de ser iguales.");
            return false;
        }



    // Si pasa todas las validaciones, enviar el formulario
    formulario.submit();
}
////////////////////////////////////////////////////////////////////////////////////////////////
