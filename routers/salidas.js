import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewareSalidas from "../middleware/middlewareSalidas.js";
import { generateToken, validateToken } from "../jwt/tokens.js";

dotenv.config();

const appSalidas = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appSalidas.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})


appSalidas.get('/', validateToken,(req, res) => {
    con.query(
      /*sql*/ `
      SELECT * FROM Salidas
      `,
      (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(data);
        }
      }
    );
});

appSalidas.post('/',middlewareSalidas,validateToken,(req, res) => {
    const { Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo } = req.body;
    const fechaRegistro = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
    con.query(
      /*sql*/ `
      INSERT INTO Salidas (Producto_Id, Cantidad, ValorUnitario, Observaciones, FechaRegistro, Activo)
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

  appSalidas.put('/:id',middlewareSalidas, validateToken,(req, res) => {
    const entradaId = req.params.id;
    const { Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      UPDATE Salidas
      SET Producto_Id=?, Cantidad=?, ValorUnitario=?, Observaciones=?, Activo=?
      WHERE Salida_Id=?
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

  appSalidas.delete('/:id',validateToken, (req, res) => {
    const entradaId = req.params.id;
  
    con.query(
      /*sql*/ `
      DELETE FROM Salidas
      WHERE Salida_Id=?
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
  

export default appSalidas;