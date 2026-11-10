// enum
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido["Pendiente"] = "PENDIENTE";
    EstadoPedido["Enviado"] = "ENVIADO";
    EstadoPedido["Entregado"] = "ENTREGADO";
})(EstadoPedido || (EstadoPedido = {}));
const estado = EstadoPedido.Enviado;
console.log("Estado del pedido:", estado);
console.log("Estados disponibles:", EstadoPedido);
const rol = "ADMIN";
console.log("Rol del usuario:", rol);
const cuotas = 6;
console.log("Cantidad de cuotas:", cuotas);
export {};
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
//# sourceMappingURL=tema6.js.map