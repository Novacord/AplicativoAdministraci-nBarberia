import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewarePrestamos from "../middleware/middlewarePrestamos.js";

dotenv.config();

const appPagoProductoUsuarios = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appPagoProductoUsuarios.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appPagoProductoUsuarios.post('/', (req, res) => {
    const { UsuarioProducto_Id, Cantidad, ValorUnitario, ValorTotal, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      INSERT INTO PagoUsuarioProducto (UsuarioProducto_Id, Cantidad, ValorUnitario, ValorTotal, Activo)
      VALUES (?, ?, ?, ?, ?)
      `,
      [UsuarioProducto_Id, Cantidad, ValorUnitario, ValorTotal, Activo],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al crear el pago para el UsuarioProducto.");
        } else {
          res.send("Pago para el UsuarioProducto creado exitosamente.");
        }
      }
    );
  });

appPagoProductoUsuarios.get('/', (req, res) => {
    con.query(
      /*sql*/ `
      SELECT * FROM PagoUsuarioProducto
      `,
      (err, data) => {
        if (err) {
          res.status(500).send("Error al obtener los pagos de UsuarioProductos.");
        } else {
          res.send(data);
        }
      }
    );
  });

  appPagoProductoUsuarios.put('/:id', (req, res) => {
    const pagoUsuarioProductoId = req.params.id;
    const { UsuarioProducto_Id, Cantidad, ValorUnitario, ValorTotal, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      UPDATE PagoUsuarioProducto
      SET UsuarioProducto_Id=?, Cantidad=?, ValorUnitario=?, ValorTotal=?, Activo=?
      WHERE PagoUsuarioProducto_Id=?
      `,
      [UsuarioProducto_Id, Cantidad, ValorUnitario, ValorTotal, Activo, pagoUsuarioProductoId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al actualizar el pago de UsuarioProducto.");
        } else {
          res.send("Pago de UsuarioProducto actualizado exitosamente.");
        }
      }
    );
  });

  appPagoProductoUsuarios.delete('/:id', (req, res) => {
    const pagoUsuarioProductoId = req.params.id;
  
    con.query(
      /*sql*/ `
      DELETE FROM PagoUsuarioProducto
      WHERE PagoUsuarioProducto_Id=?
      `,
      [pagoUsuarioProductoId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al eliminar el pago de UsuarioProducto.");
        } else {
          res.send("Pago de UsuarioProducto eliminado exitosamente.");
        }
      }
    );
  });


export default appPagoProductoUsuarios;