import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewareEntradas from "../middleware/middlewareEntradas.js"

dotenv.config();

const appEntradas = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appEntradas.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})


appEntradas.get('/', (req, res) => {
    con.query(
      /*sql*/ `
      SELECT * FROM Entradas
      `,
      (err, data) => {
        if (err) {
          res.status(500).send("Error al obtener las entradas.");
        } else {
          res.send(data);
        }
      }
    );
});

appEntradas.post('/',middlewareEntradas, (req, res) => {
    const { Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo } = req.body;
    const fechaRegistro = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
    con.query(
      /*sql*/ `
      INSERT INTO Entradas (Producto_Id, Cantidad, ValorUnitario, Observaciones, FechaRegistro, Activo)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [Producto_Id, Cantidad, ValorUnitario, Observaciones, fechaRegistro, Activo],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al crear la entrada.");
        } else {
          res.send("Entrada creada exitosamente.");
        }
      }
    );
  });

  appEntradas.put('/:id',middlewareEntradas, (req, res) => {
    const entradaId = req.params.id;
    const { Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      UPDATE Entradas
      SET Producto_Id=?, Cantidad=?, ValorUnitario=?, Observaciones=?, Activo=?
      WHERE Entrada_Id=?
      `,
      [Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo, entradaId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al actualizar la entrada.");
        } else {
          res.send("Entrada actualizada exitosamente.");
        }
      }
    );
  });

  appEntradas.delete('/:id', (req, res) => {
    const entradaId = req.params.id;
  
    con.query(
      /*sql*/ `
      DELETE FROM Entradas
      WHERE Entrada_Id=?
      `,
      [entradaId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al eliminar la entrada.");
        } else {
          res.send("Entrada eliminada exitosamente.");
        }
      }
    );
  });
  

export default appEntradas;