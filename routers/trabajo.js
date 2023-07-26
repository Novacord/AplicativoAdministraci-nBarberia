
import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewareTrabajos from '../middleware/middlewareTrabajos.js';

dotenv.config();

const appTrabajos = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appTrabajos.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appTrabajos.get('/', (req, res) => {
    con.query(
        /*sql*/`SELECT * FROM Trabajos`,
        (err,data)=>{
            res.send(data);
        } 
    )
})

appTrabajos.post('/',middlewareTrabajos,(req, res) => {
    let info = req.body;
    console.log(info);
    con.query(
        /*sql*/ `INSERT INTO Trabajos(Servicio_Id, Usuario_Id, Valor, Observaciones) VALUES (?, ?, ?, ?)`,
        [info.Servicio_Id,info.Usuario_Id,info.Valor,info.observaciones],
        (err,data)=>{
            if(err) {
                res.send(err);
            }else if(data){
                res.send(data);
            }
        }
    )
})

appTrabajos.delete('/:id', (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM Trabajos WHERE Trabajo_Id = ?`,
        [req.params.id],
        (err, data) => {
            if (err) {
                res.status(400).send(err);
            } else if (data) {
                res.status(200).send("Registro eliminado exitosamente");
            }
        }
    );
});

export default appTrabajos;