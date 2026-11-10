### Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un lenguaje de programación definido como un superconjunto de JavaScript, que fué desarrollado por Microsoft.


● ¿Qué diferencias tiene con JavaScript?
La diferencia más principal encontrada entre ambos lenguajes, es que permite utilizar un tipado estático, comprobando los tipos de datos antes de ejecutar el programa.


● ¿Qué ventajas ofrece?
Las ventajas que ofrece es la detección de errores en el momento verificando el tipo de dato, un autocompletado inteligente, actualiza automáticamente todas las referencias en tu código o te señala exactamente dónde se rompió algo y el compilador de TypeScript se encarga de transformar ese código moderno en versiones más antiguas de JavaScript para que funcione en cualquier navegador.


● ¿Cuál es su versión actual?
La version actualmente es la 7.0.2, salió el 8 de julio de 2026, rediseñado y reescrito en Go que ha generado una velocidad de 10 veces más rapido sobre su version de rama 6.0.



### Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
La manera de instalar TypeScript en un proyecto es con los siguientes comandos. Primero verificamos la version de node que tenemos instalada (las recomendables son las versiones LTS 24 o 26) <node -v>; luego inincializamos npm <npm init -y>; para luego ya installar TypeScript, que podemos integrarle los tipos de node con el types/node(con la versión que tengas intalada de node), con su ejecutor rapido tsx <npm i -D typescript @types/node@24 tsx>


● ¿Para qué sirve el archivo tsconfig.json?
El archivo tsconfig.json sirve como el centro de configuración principal de TypeScript para un proyecto. Su presencia en una carpeta indica que ese directorio es la raíz de un proyecto TypeScript, define las reglas del compilador, establece a que versión de JavaScript debe transpilarse, en que carpeta y cuales carpetan se guardan los archivos finales.


● ¿Qué hace el comando tsc?
El comando tsc (TypeScript Compiler) se encarga de compilar, o sea, verificar y controlar los tipos de datos en el código para detectar errores en el archivo .ts y asi convertilos a .js, utilizando la instalación local a través de npx.


● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
Al ejecutar <npx tsc archivo.ts> lo que hace esto es leer el archivo, verificar que no contenga errores de tipos de datos y lo transpila a un nuevo archivo.js. Pero solo lo prepara, no se ejecuta ni pone en funcionalidad ningun console.log().
Pero con la ejecución de <npx tsx archivo.ts> si pone en función el archivo, sin verificar los tipos de datos y convirtirlo a un archivo.js. Produciendolo solo en tu memoria RAM, de manera que puedas usarlo más como un tester.
Mientras que con Node <node src/app.ts> este solo ejecuta JavaScript, tambien eliminará todo tipo de TypeScript e ignorando el tsconfig.json y nunca generando un nuevo código.


### Tema 3: Tipos básicos
● ¿Qué son los tipos string, number y boolean?
Estos tipos son los tipos de datos primitivos, los más básicos y utilizados, que nos sirven para indicarle que clase de información debe contener el valor agregado:
String (Cadena de texto): representa texto o caracteres y siempre van envueltos por comillas simples <''>, comillas dobles <""> o backticks <``>.
number (Valores numéricos): Son todos los tipos de numeros, enteros, decimales, negativos y no van envueltos por nada.
boolean (Valores lógicos): Solo puede contener 2 tipos de valores, true (verdadero) o false (falso) y no va envuelto en nada. Es fundamental para manejar estructuras de control, como los condicionales (if), y validar si una condición se cumple o no.


● ¿Cómo se declara un array con tipo?
Existen 2 maneras de declarar un array con tipo, una es mediante con los signos de mayor (<) o menor (>). es declarando una variable y asignandole, despues de los 2 puntos, como Array pero seguido del tipo de dato que queramos que contenga encerrado entre los signos de mayor (<) o menor (>):
let materias: Array<string> = ["Taller de Lenguajes de Programación", "Bases de Datos"].
La otra manera de declarar vendría a ser con corchetes[], es de la misma manera que la anterior pero sin el agregado del Array y agregandole el corchete al final del tipo de dato que elegimos:
let notas: number[] = [1, 2, 4].


● ¿Qué es un tipo unión?
Union Types es una funcionabilidad de Typescript para poder declarar una variable de uno u otro tipo:
let identificador: number | string;

identificador = 10452;       //  Válido
identificador = "Flaco";    //  Válido


● ¿Por qué se recomienda evitar any?
Se recomienda evitar el tipo any en TypeScript porque desactiva por completo el sistema de control y verificación de tipos. Esto destruye el propósito principal por el cual se utiliza TypeScript en un proyecto.



### Tema 4: Funciones
● ¿Cómo se indican los tipos de los parámetros?
Cuando queremos generar una función debemos tener en cuenta los parámetros y dentro de ellos podemos integrar distintos tipos de valores, tanto como una funcion flecha o declarativa, el metodo es el mismo y es de la misma manera que asignamos los datos en las variables pero sin la necesidad de la funcion declarativa <let>, creando nuestra funcion y seguido del nombre de esta, entre parétensis, ingresamos el parametro poniendo el nombre de la variable que queramos formar, seguido de 2 puntos, el tipo de dato para la variable y si queremos generar otras variables dentro, coloando una coma podemos seguir:

// funcion declarativa
function nuevaFuncion(nombre: string, edad: number): string {
    return `Hola ${nombre}, tu edad es: ${edad} años`
}

Tambien podemos asignarles valores por defecto, que vendría siendo a traves de un <=> y luego el valor que decidamos; como tambien agregar una parametro opcional, que funciona mediante de la misma manera que la asignación de datos, como anteriormente se vio, pero con el agregado de un signo de interrogación <?> seguido del nombre de la variable y antes de los 2 puntos, esto le dice al codigo que no es un parametro obligatorio y no pasa nada si no se utiliza:

// funcion flecha
const otraFuncion = (telefono?: string, casado: boolean = true) => {
    console.log("Usuario casado:", casado);
    if (telefono) {
        console.log(`Teléfono: ${telefono}`);
    }
};


● ¿Cómo se indica el tipo de retorno?
El tipo de retorno se indica luego del parametro y los 2 puntos, pudiendo colocar cualquier tipo de dato y hasta un Union Types, pero si dentro de la función no se encuentra ningun return (porque solo ejecuta una acción), podemos utilizar el tipo void.



### Tema 5: Interfaces y type
● ¿Qué es una interfaz y para qué sirve?
La interfaz (interface) es una estructura que sirve para definir la forma o el contrato que debe cumplir un objeto.


● ¿Qué es un type?
Mientras que type vendría a ser un tipo de asignación para almacenar combinaciones de variables sueltas, datos primitivos o valores específicos. 


● ¿Cómo se declara una propiedad opcional?
Una propiedad opcional se declara agregando un signo de pregunta (?) justo después del nombre de la propiedad y antes de los dos puntos (:) que definen su tipo de dato. Es de la misma manera que como lo haciamos en los parametros, pero aca voy a mostrar con un interface y un type:

//Interface
interface Alumno {
    legajo: number;       
    nombre: string;       
    telefono?: string;    
}

//type
type entregaTP = {
    Entrega: boolean;
    Nota?: number
}


● ¿Cuándo conviene usar cada uno?
Con la asignación type, conviene usar cuando tenemos uniones (|), intersecciones (&), tipos literales ("ADMIN" | "USER") y alias de primitivos. Mientras que con interface es cuando tenemos estructuras de objetos y clases, sobre todo cuando se necesita extends.



### Tema 6: Enums y tipos literales
● ¿Qué es un enum?
La funcionalidad enum no es solo un tipo, es estructura especial que permite definir un conjunto de constantes con nombre. Sirve para organizar valores fijos y relacionados en un solo lugar, haciendo que el código sea mucho más fácil de leer y menos propenso a errores de tipeo.


● ¿Qué es un tipo literal?
Un tipo literal es un tipo de dato que representa un valor unico y exacto, sería que es asignado como una constante y sin que tenga que aclararse de que tipo es, ya que el codigo lo entiende ya de que tipo es.


● ¿En qué se parecen y en qué se diferencian?
La relación que se encuentra entre un enum y un literal type es en su manera de limitar sus variables un conjunto fijo de opciones permitidas, sería que solo aceptan los valores que ingresaste. Pero una gran diferencia es su manera de dirigirse a sus valores, con el enum podemos recorrer sus distintos datos, mientras que con el otro no, además de que, uno se lo puede utilizar haciendo referencia al objeto <objeto.dato> y el otro llamando al valor <"dato">.


