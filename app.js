import dotenv from 'dotenv'
import express from 'express';
import appBarberos from './routers/barberos.js';
import appGanancias from './routers/ganancia.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use("/registrar-usuario", appBarberos);

app.use("/ganancias", appGanancias);

const config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
