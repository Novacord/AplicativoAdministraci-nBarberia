import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import { generateToken, validateToken } from "../jwt/tokens.js";

dotenv.config();

const appInventario = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appInventario.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appInventario.get('/',validateToken,(req, res) => {
        con.query(
            /*sql*/`SELECT 
            Nombre AS Producto,
            COALESCE((SELECT SUM(Cantidad) FROM Entradas t2 WHERE t2.Producto_Id = t1.Producto_Id), 0) AS Entradas,
            COALESCE((SELECT SUM(Cantidad) FROM Salidas t2 WHERE t2.Producto_Id = t1.Producto_Id), 0) AS Salidas,
            COALESCE((SELECT SUM(Cantidad) FROM UsuarioProductos t2 WHERE t2.Producto_Id = t1.Producto_Id), 0) AS Usuario,
            (COALESCE((SELECT SUM(Cantidad) FROM Entradas t2 WHERE t2.Producto_Id = t1.Producto_Id), 0) -
            COALESCE((SELECT SUM(Cantidad) FROM Salidas t2 WHERE t2.Producto_Id = t1.Producto_Id), 0) -
            COALESCE((SELECT SUM(Cantidad) FROM UsuarioProductos t2 WHERE t2.Producto_Id = t1.Producto_Id), 0)) AS Inventario
            FROM Productos t1;
            `,
            (err, data) => {
                res.status(200).send(data);
            }
        );
});

export default appInventario;