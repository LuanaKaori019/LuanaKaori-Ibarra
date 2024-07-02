
function add() {
    console.log(100 * 20);
}
add();


// Paso 3: Agregar parámetros
function add(a, b) {
    console.log(a * b);
}

//Paso 4: Uso de argumentos
let number1 = 100;
let number2 = 20;
add(number1, number2); 

function add(a, b) {
    let result = a * b;
    return result;
}

// Paso 5: Agregar el <return>
let result = add(number1, number2);
console.log(result); 

// Step 6: Convert to an anonymous function
let add = function(a, b) {
    let result = a * b;
    return result;
};

// Paso 6: Convertir a una función anónima
let result = add(number1, number2);
console.log(result); 


//Difficulty Level: Medium

// Step 1: Crear un funcion "greet"
function greet(name) {
    console.log(`Hello, ${name}! Welcome to our platform.`);
}

// llamar la fucion por mi nombre
greet("Ibarra");

// Crea una función anónima que reciba
let multiply = function(num1, num2) {
    return num1 * num2;
};

// llamar la funcion con 2 valores differente
console.log(multiply(5, 3)); 
console.log(multiply(7, 8)); 

// etapa 3 : crear la funcion "area"
function area(base, height) {
    return 0.5 * base * height;
}

// llamar la funcion para calcular la area de un triangulo 
console.log(area(10, 5)); 
console.log(area(8, 12)); 

// etapa  4: crear la funcion perimeter "perimeter"
function perimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}

//llamar a la funcion para calcular el perimeter
console.log(perimeter(3, 4, 5)); 
console.log(perimeter(6, 6, 6)); 


// Paso 5: Crear la función para calcular el precio total con descuentos
function calcularPrecioTotal(precio, cantidad) {
    // Calcula el precio total sin descuento
    let precioTotal = precio * cantidad;

    // Aplica un descuento del 20% si la cantidad es 20 o más
    if (cantidad >= 20) {
        precioTotal *= 0.8; // Aplica un descuento del 20%
    // Aplica un descuento del 10% si la cantidad es 10 o más
    } else if (cantidad >= 10) {
        precioTotal *= 0.9; // Aplica un descuento del 10%
    }

    // Devuelve el precio total después de aplicar el descuento (si corresponde)
    return precioTotal;
}

// Llama a la función con diferentes valores
console.log(calcularPrecioTotal(50, 5));   
console.log(calcularPrecioTotal(50, 15));  
console.log(calcularPrecioTotal(50, 25));

// Paso 6: Crear la función "isAnAdult"
function isAnAdult(edad) {
    // Verifica si la edad es 18 o mayor
    if (edad >= 18) {
        return "Eres un adulto";
    } else {
        return "No eres un adulto";
    }
}

// Llama a la función con diferentes valores de edad
console.log(isAnAdult(21));
console.log(isAnAdult(16));
console.log(isAnAdult(18)); 

// Función para calcular el impuesto sobre el ingreso anual
function calcularImpuesto(ingresoAnual) {
    let impuesto;

    // Condicionales anidados para determinar el impuesto
    if (ingresoAnual <= 10000) {
        // Si el ingreso es menor o igual a $10,000, el impuesto es del 10%
        impuesto = ingresoAnual * 0.10;
    } else if (ingresoAnual <= 20000) {
        // Si el ingreso es mayor a $10,000 pero menor o igual a $20,000, el impuesto es del 15%
        impuesto = ingresoAnual * 0.15;
    } else {
        // Si el ingreso es mayor a $20,000, el impuesto es del 20%
        impuesto = ingresoAnual * 0.20;
    }

    return impuesto;
}

// Probar la función con diferentes valores de ingreso
console.log(calcularImpuesto(8000));   
console.log(calcularImpuesto(15000));  
console.log(calcularImpuesto(25000));  

// Función para verificar si un día es laborable o de fin de semana
function verificarDia(numeroDia) {
    let mensaje;

    // Estructura switch anidada para determinar el tipo de día
    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día laborable.";
            break;
        case 6:
        case 7:
            mensaje = "Es el fin de semana.";
            break;
        default:
            mensaje = "Número de día inválido. Debe estar entre 1 y 7.";
    }

    return mensaje;
}

// Probar la función con diferentes valores de día
console.log(verificarDia(3)); 
console.log(verificarDia(6)); 
console.log(verificarDia(0)); 

// Función para capturar y validar información personal
function capturarInformacionPersonal() {
    // Pedir al usuario que ingrese su nombre
    let nombre = prompt("Ingresa tu nombre:");

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        console.error("El nombre no puede estar vacío");
        return; // Termina la ejecución si el nombre está vacío
    }

    // Pedir al usuario que ingrese su apellido
    let apellido = prompt("Ingresa tu apellido:");

    // Validar que el apellido no esté vacío
    if (apellido === "") {
        console.error("El apellido no puede estar vacío");
        return; // Termina la ejecución si el apellido está vacío
    }

    // Pedir al usuario que ingrese su edad
    let edad = prompt("Ingresa tu edad:");

    // Validar que la edad no esté vacía y sea un número
    if (edad === "" || isNaN(edad)) {
        console.error("La edad no puede estar vacía y debe ser un número");
        return; // Termina la ejecución si la edad no es válida
    }

    // Crear un objeto para almacenar la información personal
    let informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: parseInt(edad)
    };

    // Mostrar la información personal en la consola
    console.log(informacionPersonal);
}

// Llamar a la función para capturar la información personal
capturarInformacionPersonal();

// Función para saludar al usuario
function saludar(nombre) {
    // Devuelve un saludo con el nombre proporcionado
    return `Hola, mi nombre es ${nombre}`;
}

// Función para calcular la edad del usuario
function calcularEdad(anoNacimiento, anoActual) {
    // Calcula y devuelve la edad restando el año de nacimiento del año actual
    return anoActual - anoNacimiento;
}

// Función para presentar al usuario
function presentar() {
    // Pedir al usuario que ingrese su nombre
    let nombre = prompt("Ingresa tu nombre:");
    
    // Pedir al usuario que ingrese su año de nacimiento
    let anoNacimiento = prompt("Ingresa tu año de nacimiento:");
    
    // Pedir al usuario que ingrese el año actual
    let anoActual = prompt("Ingresa el año actual:");

    // Validar que los valores ingresados no estén vacíos
    if (nombre === "" || anoNacimiento === "" || anoActual === "" || isNaN(anoNacimiento) || isNaN(anoActual)) {
        console.error("Todos los campos deben ser completados y los años deben ser números");
        return; // Termina la ejecución si hay campos inválidos
    }

    // Llamar a la función saludar y mostrar el saludo
    let saludo = saludar(nombre);
    console.log(saludo);

    // Llamar a la función calcularEdad y mostrar la edad
    let edad = calcularEdad(parseInt(anoNacimiento), parseInt(anoActual));
    console.log(`Tengo ${edad} años.`);

    // Mostrar un mensaje de presentación completo
    alert(`${saludo}. Tengo ${edad} años.`);
}

// Llamar a la función de presentación
presentar();





