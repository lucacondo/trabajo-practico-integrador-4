function nuevaFuncion(nombre, edad) {
    return `Hola ${nombre}, tu edad es: ${edad} años`;
}
;
const otraFuncion = (telefono, casado = true) => {
    console.log("Usuario casado:", casado);
    if (telefono) {
        console.log(`Teléfono: ${telefono}`);
    }
};
console.log(nuevaFuncion("Ana", 25));
otraFuncion("1223567");
export {};
/* PS C:\Users\IPF-2025\Desktop\tlp\Cuatri 2\typeScript> npx tsx src/tema4.ts
Hola Ana, tu edad es: 25 años
Usuario casado: true
Teléfono: 1223567
PS C:\Users\IPF-2025\Desktop\tlp\Cuatri 2\typeScript>  */ 
//# sourceMappingURL=tema4.js.map