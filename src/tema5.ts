//Interface
interface Usuario {
    nombre: string;
    edad: number;
}

const usuario: Usuario = {
    nombre: "Luis",
    edad: 30
};

interface Administrador extends Usuario {
    permisos: string[];
}

const administrador: Administrador = {
    nombre: "Marta",
    edad: 28,
    permisos: ["crear", "eliminar"]
};

console.log("Administrador:", administrador);

console.log("Usuario:", usuario);

//type
type Identificador = string | number;

let id: Identificador = 123;
console.log("ID numérico:", id);

id = "ABC123";
console.log("ID de texto:", id);


// Intersección (&)
type Persona = {
    nombre: string;
};

type Empleado = {
    legajo: number;
};

type PersonaEmpleada = Persona & Empleado;

const empleado: PersonaEmpleada = {
    nombre: "Ana",
    legajo: 100
};

console.log("Empleado:", empleado);

// Tipos literales
type Rol = "ADMIN" | "USER";

const rol: Rol = "ADMIN";
console.log("Rol:", rol);

/* PS C:\Users\IPF-2025\Desktop\tlp\Cuatri 2\typeScript> npx tsx src/tema5.ts
Administrador: { nombre: 'Marta', edad: 28, permisos: [ 'crear', 'eliminar' ] }
Usuario: { nombre: 'Luis', edad: 30 }
ID numérico: 123
ID de texto: ABC123
Empleado: { nombre: 'Ana', legajo: 100 }
Rol: ADMIN
PS C:\Users\IPF-2025\Desktop\tlp\Cuatri 2\typeScript>  */