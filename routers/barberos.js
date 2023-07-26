
import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import middlewareBarberos from '../middleware/middlewareBarberos.js';

dotenv.config();

const appBarberos = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appBarberos.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appBarberos.get('/',(req, res) => {
    con.query(
        /*sql*/`SELECT * FROM Usuarios`,
        (err, data) => {
            res.status(200).send(data);
        }
    );
});

appBarberos.put('/:id', middlewareBarberos, (req, res) => {
    const usuarioId = req.params.id;
    const info = req.body;
    con.query(
      /*sql*/ `
      UPDATE Usuarios
      SET Nombre = ?, Documento = ?, Correo = ?, Clave = ?, Activo = ?
      WHERE Usuario_Id = ?`,
      [info.Nombre, info.Documento, info.Correo, info.Clave, info.Activo, usuarioId],
      (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (data.affectedRows === 0) {
            res.status(404).send("Usuario no encontrado.");
          } else {
            con.query(
              /*sql*/ `
              UPDATE UsuarioRoles
              SET Rol_Id = ?
              WHERE Usuario_Id = ?`,
              [info.Rol_Id, usuarioId],
              (err, data) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  if (data.affectedRows === 0) {
                    res.status(404).send("Usuario o rol no encontrado.");
                  } else {
                    res.status(200).send("Actualización exitosa.");
                  }
                }
              }
            );
          }
        }
      }
    );
  });

appBarberos.post('/', middlewareBarberos, (req, res) => {
    let info = req.body;
    con.query(
        /*sql*/ `INSERT INTO Usuarios(Nombre, Documento, Correo, Clave, Activo) 
                 VALUES (?, ?, ?, ?, ?)`,
        [info.Nombre, info.Documento, info.Correo, info.Clave, info.Activo],
        (err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                const usuarioId = data.insertId;
                
                con.query(
                    /*sql*/ `INSERT INTO UsuarioRoles(Usuario_Id, Rol_Id, FechaRegistro) 
                             VALUES (?, ?, NOW())`,
                    [usuarioId, info.Rol_Id],
                    (err, data) => {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            res.status(200).send("registro exitoso");
                        }
                    }
                );
            }
        }
    );
});

appBarberos.delete('/:id', (req, res) => {
    const usuarioId = req.params.id;
    con.query(
      /*sql*/ `
      DELETE FROM UsuarioRoles
      WHERE Usuario_Id = ?`,
      [usuarioId],
      (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (data.affectedRows === 0) {
            res.status(404).send("Usuario no encontrado.");
          } else {
            con.query(
              /*sql*/ `
              DELETE FROM Usuarios
              WHERE Usuario_Id = ?`,
              [usuarioId],
              (err, data) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  if (data.affectedRows === 0) {
                    res.status(404).send("Usuario no encontrado.");
                  } else {
                    res.status(200).send("Eliminación exitosa.");
                  }
                }
              }
            );
          }
        }
      }
    );
  });
  

export default appBarberos;