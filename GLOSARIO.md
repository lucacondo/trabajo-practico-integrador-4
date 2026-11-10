# Glosario de TypeScript


### 1. npx
Definición: Es un ejecutor de paquetes que viene incluido con npm. Permite ejecutar herramientas de desarrollo y comandos de librerías de forma local desde la carpeta `node_modules` de nuestro proyecto, sin necesidad de instalarlas globalmente en la computadora.
Ejemplo:
    npx tsc --init


### 2. Go (Golang)
Definición: Es el lenguaje de programación de código abierto desarrollado por Google en el cual fue reescrito por completo el compilador de TypeScript 7. Al compilarse de forma nativa y manejar paralelismo real en el procesador, aceleró hasta 10 veces la velocidad de validación de tipos del proyecto.


### 3. npm i -D
Definición: En el comando npm i -D, la -D (mayúscula) es una bandera o atajo (flag) que sirve para indicarle a npm que guarde los paquetes dentro de la sección devDependencies (dependencias de desarrollo) de tu archivo package.json


### 4. any
Definición: Es un tipo de dato comodín en TypeScript que desactiva por completo el sistema de control y verificación de tipos sobre una variable. Se recomienda evitar su uso ya que anula la seguridad del código y permite errores en tiempo de ejecución.
Ejemplo:
    let datoFlexible: any = "nico";
    datoFlexible = 24; // Válido, pero rompe el propósito de TypeScript

### 5. return
Definición: Es la palabra clave utilizada dentro del cuerpo de una función para detener su ejecución y especificar el valor exacto que debe enviar de vuelta a la línea de código que la invocó.
Ejemplo:
    function obtenerAño(): number {
        return 2026;
    }

### 6. interface
Definición: Es una estructura formal que define el plano estructural o "contrato" de un objeto. Especifica de manera estricta qué propiedades y tipos de datos debe contener dicho objeto para ser considerado válido por el compilador en tiempo de desarrollo.
Ejemplo:
    interface Alumno {
        nombre: string;
        legajo: number;
    }

### 7. class Persona { constructor(private nombre: string) {} }
Definición: Representa la declaración de una clase en TypeScript utilizando la característica de **propiedades de parámetro** (*parameter properties*). El modificador de acceso `private` dentro del constructor declara y asigna automáticamente la propiedad en la clase en un solo paso, restringiendo su acceso únicamente al interior de la propia clase.
Ejemplo:
    class Persona {
        constructor(private nombre: string) {}

        saludar() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    }

### 8. namespace Utilidades { export const PI = 3.14; }
Definición: Un `namespace` (espacio de nombres) es una forma propia de TypeScript para agrupar bloques de código relacionados (como funciones, clases o constantes) bajo un mismo nombre contenedor, evitando conflictos de nombres globales y organizando el código mediante la exportación selectiva con `export`.
Ejemplo:
    namespace Utilidades {
        export const PI = 3.14;
    }
// Uso del namespace:
    console.log(Utilidades.PI);

### 9. void
Definición: Es un tipo de retorno especial asignado a las funciones que ejecutan una acción o bloque de instrucciones (como un inicio de sesión o un listado por consola) pero no devuelven ningún valor mediante la sentencia `return`.
Ejemplo.
    function logearSistema(msg: string): void {
        console.log(`[LOG]: ${msg}`);
    }

### 10. unknown
Definición: Es la alternativa segura al tipo `any`. Indica que una variable almacena un tipo de dato desconocido (por ejemplo, la respuesta externa de una base de datos), obligando al desarrollador a realizar una comprobación de tipo condicional antes de poder operar con ella.
Ejemplo:
    let respuestaApi: unknown = "Éxito";
    
    if (typeof respuestaApi === "string") {
        console.log(respuestaApi.toUpperCase()); // Seguro y permitido
    }
