import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewarePrestamos from "../middleware/middlewarePrestamos.js";

dotenv.config();

const appPrestamoBarberos = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appPrestamoBarberos.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appPrestamoBarberos.post('/',middlewarePrestamos, (req, res) => {
    const { Usuario_Id, Producto_Id, Cantidad, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      INSERT INTO UsuarioProductos (Usuario_Id, Producto_Id, Cantidad, Activo)
      VALUES (?, ?, ?, ?)
      `,
      [Usuario_Id, Producto_Id, Cantidad, Activo],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al crear la relación Usuario-Producto.");
        } else {
          res.send("Relación Usuario-Producto creada exitosamente.");
        }
      }
    );
  });

  appPrestamoBarberos.get('/', (req, res) => {
    con.query(
      /*sql*/ `
      SELECT * FROM UsuarioProductos
      `,
      (err, data) => {
        if (err) {
          res.status(500).send("Error al obtener las relaciones Usuario-Producto.");
        } else {
          res.send(data);
        }
      }
    );
  });

  appPrestamoBarberos.put('/:id',middlewarePrestamos, (req, res) => {
    const usuarioProductoId = req.params.id;
    const { Usuario_Id, Producto_Id, Cantidad, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      UPDATE UsuarioProductos
      SET Usuario_Id=?, Producto_Id=?, Cantidad=?, Activo=?
      WHERE UsuarioProducto_Id=?
      `,
      [Usuario_Id, Producto_Id, Cantidad, Activo, usuarioProductoId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al actualizar la relación Usuario-Producto.");
        } else {
          res.send("Relación Usuario-Producto actualizada exitosamente.");
        }
      }
    );
  });

  appPrestamoBarberos.delete('/:id', (req, res) => {
    const usuarioProductoId = req.params.id;
  
    con.query(
      /*sql*/ `
      DELETE FROM UsuarioProductos
      WHERE UsuarioProducto_Id=?
      `,
      [usuarioProductoId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al eliminar la relación Usuario-Producto.");
        } else {
          res.send("Relación Usuario-Producto eliminada exitosamente.");
        }
      }
    );
  });


export default appPrestamoBarberos;