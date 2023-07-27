import dotenv from 'dotenv'
import express from 'express';
import appBarberos from './routers/barberos.js';
import appGanancias from './routers/ganancia.js';
import appTrabajos from './routers/trabajo.js';
import appServicios from './routers/servicios.js';
import appEntradas from './routers/entradas.js';
import appSalidas from './routers/salidas.js';
import appPrestamoBarberos from './routers/prestamoBarberos.js';
import appInventario from './routers/inventario.js';
import appProductos from './routers/productos.js';
import appPagoProductoUsuarios from './routers/pagoProductoUsuarios.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use("/registrar-usuario", appBarberos);

app.use("/ganancias", appGanancias);

app.use("/trabajos", appTrabajos);

app.use("/servicios", appServicios)

app.use("/entradas-inventario", appEntradas);

app.use("/salidas-inventario", appSalidas);

app.use("/prestamo-usuario", appPrestamoBarberos);

app.use("/inventario", appInventario);

app.use("/productos", appProductos);

app.use("/PagoProductoUsuarios", appPagoProductoUsuarios);

const config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
