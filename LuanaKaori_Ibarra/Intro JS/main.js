console.log("Starting javascript...");


// Variable con mi nombre 
var myName = "Ibarra"; 
console.log(myName);
var myLastName = "Luana Kaori";
var myAge = 24;
var myPet = "kitai"
var petAge = 100;
var fullName = myName + " " + myLastName;
var presentationText = `Hello, my name is ${fullName}. I am ${myAge} years old. 
I have a pet named ${myPet} who is ${petAge} years old.`;

// Print todo los variables en la consola
console.log("Last Name:", myLastName);
console.log("Age:", myAge);
console.log("Pet's Name:", myPet);
console.log("Pet's Age:", petAge);
console.log("Full Name:", fullName);
console.log("Presentation Text:", presentationText);

//Explicación del Código:(para borrar antes de entregar)
//Comenzamos declarando variables para tu primer nombre, apellido, edad, nombre de la mascota y edad de la mascota.
//Luego, concatenamos myName y myLastName para formar un fullName.
//Usamos un literal de plantilla para crear un presentationText que combina todas las variables en una frase legible.
//Finalmente, registramos cada variable y el presentationText en la consola.

var sumAges = myAge + petAge;           
var subtractAges = myAge - petAge;      
var productAges = myAge * petAge;       
var divisionAges = myAge / petAge; 


console.log("Suma de las edades:", sumAges);
console.log("Resta de las edades:", subtractAges);
console.log("Producto de las edades:", productAges);
console.log("División de las edades:", divisionAges);

// Crear el objeto student
var student = {
    firstName: myName,
    lastName: myLastName,
    age: myAge,
    course: "JavaScript Basics",
    isGraduated: false
};

console.table(student);

// Mostrar cada propiedad del objeto student por separado
console.log("Nombre del Estudiante:", student.firstName);
console.log("Apellido del Estudiante:", student.lastName);
console.log("Edad del Estudiante:", student.age);
console.log("Curso del Estudiante:", student.course);
console.log("Graduado:", student.isGraduated);

var pet = {
    name: myPet,
    species: "Dog",     
    age: 100,
    color: "white",     
    isVaccinated: true
};

console.table(pet);

console.log("Nombre de la Mascota:", pet.name);
console.log("Especie de la Mascota:", pet.species);
console.log("Edad de la Mascota:", pet.age);
console.log("Color de la Mascota:", pet.color);
console.log("¿Está vacunada la Mascota?:", pet.isVaccinated);

// el arreglo fruits
var fruits = ["Manzana", "Banana", "Naranja", "Uva", "Mango"];
console.log("Arreglo de Frutas:", fruits);

// para mostrar cada elemento del arreglo por separado
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruta " + (i + 1) + ":", fruits[i]);
}

var userAge = prompt("Por favor, introduce tu edad:");
var IamAdult = userAge >= 18;
console.log(`Soy un adulto: ${IamAdult}`);

// Difficulty Level: High
var numbers = [5, 10, 15, 20, 25];
console.log("Arreglo de Números:", numbers);


for (var i = 0; i < numbers.length; i++) {
    console.log("Número " + (i + 1) + ":", numbers[i]);
}


var family = [
    { name: "Myriame", age: 50, relationship: "Madre", occupation: "Empresaria", hobby: "Cocinar" },
    { name: "Ibarra", age: 52, relationship: "Padre", occupation: "Phisician", hobby: "Cantar" },
    { name: "Macarena", age: 35, relationship: "Hermana", occupation: "Doctor", hobby: "Deportes" },
    { name: "Carola", age: 32, relationship: "Hermana", occupation: "teacher", hobby: "Pintar" },
    { name: "Guadalupe", age: 30, relationship: "Hermana", occupation: "ING Quimic", hobby: "Jugar" }
];

// Mostrar el arreglo family completo en la consola
console.log("Arreglo de Familia:");
console.table(family);

// Mostrar cada objeto del arreglo family por separado
for (var i = 0; i < family.length; i++) {
    console.log("Miembro de la Familia " + (i + 1) + ":", family[i]);
}

// Crear la variable randomText utilizando elementos específicos de los arreglos
var randomText = `mi hermana le encanta las ${fruits[1]} y se llama ${family[4].name} y recien compro ${numbers[3]}.`;

// Mostrar randomText en la consola
console.log("Texto Aleatorio:", randomText);
