import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewareServicios from "../middleware/middlewareServicios.js";

dotenv.config();

const appServicios = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appServicios.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appServicios.get('/',(req, res) => {
    con.query(
       /*sql*/ `
      SELECT * FROM servicios
      `,(err,data) => {
        res.send(data)
      }
    )
})

appServicios.post('/', middlewareServicios,(req, res) => {
    const { Nombre, Valor, Activo } = req.body;
    con.query(
      /*sql*/ `
      INSERT INTO servicios (Nombre, Valor, Activo)
      VALUES (?, ?, ?);
      `,
      [Nombre, Valor, Activo],
      (err, result) => {
        if (err) {
          res.status(500).send('Error al agregar el servicio.');
        } else {
          res.status(201).send('registro exitoso');
        }
      }
    );
  });

  appServicios.put('/:id',middlewareServicios, (req, res) => {
    const servicioId = req.params.id;
    const { Nombre, Valor, Activo } = req.body;
    con.query(
      /*sql*/ `
      UPDATE servicios
      SET Nombre = ?, Valor = ?, Activo = ?
      WHERE Servicio_Id = ?;
      `,
      [Nombre, Valor, Activo, servicioId],
      (err, result) => {
        if (err) {
          console.error('Error al actualizar el servicio:', err);
          res.status(500).send('Error al actualizar el servicio.');
        } else {
          res.status(200).send('El servicio se ha actualizado exitosamente.');
        }
      }
    );
  });

  appServicios.delete('/:id', (req, res) => {
    const servicioId = req.params.id;
  
    con.query(
      /*sql*/ `
      DELETE FROM servicios
      WHERE Servicio_Id = ?;
      `,
      [servicioId],
      (err, result) => {
        if (err) {
          console.error('Error al eliminar el servicio:', err);
          res.status(500).send('Error al eliminar el servicio.');
        } else {
          res.status(200).send('El servicio se ha eliminado exitosamente.');
        }
      }
    );
  });

export default appServicios;