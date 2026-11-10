// enum
enum EstadoPedido {
    Pendiente = "PENDIENTE",
    Enviado = "ENVIADO",
    Entregado = "ENTREGADO"
}

const estado: EstadoPedido = EstadoPedido.Enviado;

console.log("Estado del pedido:", estado);
console.log("Estados disponibles:", EstadoPedido);

// types liretal
type Rol = "ADMIN" | "USER";

const rol: Rol = "ADMIN";

console.log("Rol del usuario:", rol);

// También pueden usarse con números.
type CantidadCuotas = 3 | 6 | 12;

const cuotas: CantidadCuotas = 6;

console.log("Cantidad de cuotas:", cuotas);

// Ejemplos de errores
// const estadoIncorrecto: EstadoPedido = "CANCELADO";
// const rolIncorrecto: Rol = "INVITADO";
// const cuotasIncorrectas: CantidadCuotas = 9;

/* PS C:\Users\IPF-2025\Desktop\tlp\Cuatri 2\typeScript> npx tsx src/tema6.ts                   
Estado del pedido: ENVIADO
Estados disponibles: { Pendiente: 'PENDIENTE', Enviado: 'ENVIADO', Entregado: 'ENTREGADO' }
Rol del usuario: ADMIN
Cantidad de cuotas: 6
PS C:\Users\IPF-2025\Desktop\tlp\Cuatri 2\typeScript>  */