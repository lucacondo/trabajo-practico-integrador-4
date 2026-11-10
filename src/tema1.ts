// Tipo explícito: indicamos que numero es un number.
let numero: number = 2;

// Tipo inferido: TypeScript deduce que mensaje es un string.
let mensaje = "Hola, TypeScript";

console.log("Número:", numero);
console.log("Mensaje:", mensaje);

// Si descomentamos esta línea, TypeScript muestra un error:
// numero = "b";