import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewarePrestamos from "../middleware/middlewarePrestamos.js";
import { generateToken, validateToken } from "../jwt/tokens.js";

dotenv.config();

const appProductos = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appProductos.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appProductos.post('/', validateToken,(req, res) => {
    const { Nombre, ValorVenta, InventarioBase, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      INSERT INTO Productos (Nombre, ValorVenta, InventarioBase, Activo)
      VALUES (?, ?, ?, ?)
      `,
      [Nombre, ValorVenta, InventarioBase, Activo],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al crear el producto.");
        } else {
          res.send("Producto creado exitosamente.");
        }
      }
    );
  });

  appProductos.get('/', validateToken,(req, res) => {
    con.query(
      /*sql*/ `
      SELECT * FROM Productos
      `,
      (err, data) => {
        if (err) {
          res.status(500).send("Error al obtener los productos.");
        } else {
          res.send(data);
        }
      }
    );
  });

  appProductos.put('/:id',validateToken, (req, res) => {
    const productoId = req.params.id;
    const { Nombre, ValorVenta, InventarioBase, Activo } = req.body;
  
    con.query(
      /*sql*/ `
      UPDATE Productos
      SET Nombre=?, ValorVenta=?, InventarioBase=?, Activo=?
      WHERE Producto_Id=?
      `,
      [Nombre, ValorVenta, InventarioBase, Activo, productoId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al actualizar el producto.");
        } else {
          res.send("Producto actualizado exitosamente.");
        }
      }
    );
  });


  appProductos.delete('/:id', validateToken,(req, res) => {
    const productoId = req.params.id;
  
    con.query(
      /*sql*/ `
      DELETE FROM Productos
      WHERE Producto_Id=?
      `,
      [productoId],
      (err, result) => {
        if (err) {
          res.status(500).send("Error al eliminar el producto.");
        } else {
          res.send("Producto eliminado exitosamente.");
        }
      }
    );
  });

export default appProductos;