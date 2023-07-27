import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import { generateToken, validateToken } from "../jwt/tokens.js";

dotenv.config();

const appGanancias = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appGanancias.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appGanancias.get('/year',validateToken,(req, res) => {
        con.query(
            /*sql*/`SELECT t2.Usuario_Id, t2.Nombre AS Barber,
                        SUM(t1.Valor) AS ValorTotal,
                        CAST((SUM(t1.Valor) * 0.60) AS UNSIGNED) AS Barbero,
                        CAST((SUM(t1.Valor) * 0.40) AS UNSIGNED) AS Administrador
                    FROM Trabajos t1
                    INNER JOIN Usuarios t2 ON t1.Usuario_Id = t2.Usuario_Id
                    WHERE YEAR(t1.FechaRegistro) = ?
                    GROUP BY t2.Usuario_Id, t2.Nombre;`,req.query.year,
            (err, data) => {
                res.status(200).send(data);
            }
        );
});

appGanancias.get('/month',validateToken,(req, res) => {
    if(req.query.year && req.query.month){
        con.query(
            /*sql*/`SELECT t2.Usuario_Id, t2.Nombre AS Barber,
                        SUM(t1.Valor) AS ValorTotal,
                        CAST((SUM(t1.Valor) * 0.60) AS UNSIGNED) AS Barbero,
                        CAST((SUM(t1.Valor) * 0.40) AS UNSIGNED) AS Administrador
                    FROM Trabajos t1
                    INNER JOIN Usuarios t2 ON t1.Usuario_Id = t2.Usuario_Id
                    WHERE YEAR(t1.FechaRegistro) = ? AND MONTH(t1.FechaRegistro) = ?
                    GROUP BY t2.Usuario_Id, t2.Nombre;`,[req.query.year,req.query.month],
            (err, data) => {
                res.status(200).send(data);
            }
        );
    } else {
        res.status(400).send('ingrese year y month');
    }
});

appGanancias.get('/day',validateToken,(req, res) => {
        con.query(
            /*sql*/`SELECT t2.Usuario_Id, t2.Nombre AS Barber,
                        SUM(t1.Valor) AS ValorTotal,
                        CAST((SUM(t1.Valor) * 0.60) AS UNSIGNED) AS Barbero,
                        CAST((SUM(t1.Valor) * 0.40) AS UNSIGNED) AS Administrador
                    FROM Trabajos t1
                    INNER JOIN Usuarios t2 ON t1.Usuario_Id = t2.Usuario_Id
                    WHERE DATE(t1.FechaRegistro) = ?
                    GROUP BY t2.Usuario_Id, t2.Nombre;`,[req.query.date],
            (err, data) => {
                res.status(200).send(data);
            }
        );
});

export default appGanancias;