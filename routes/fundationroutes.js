import { Router, response } from "express";
const fundationRoutes = Router();

import connection from "../connectionToDB/index.js";

fundationRoutes.get("/", (req,res) => {
    const query = "SELECT id, name,CBU, collected FROM fundation";
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send(response)
    });
});

fundationRoutes.get("/:id", (req,res) => {
    //me traigo lo que llega de un formulario del front
    const id = req.body.id
     //defino query
    const query = `SELECT name , CBU , collected FROM fundation WHERE id=${id}`
    //ejecuto query
    connection.query(query, (err,response,fields)=>{
        console.log("entro")
        if(err){
            throw err
        }
        //envio Rta al cliente
        res.send(response)
    })
});

// Crear una fundación
fundationRoutes.post("/", (req, res) => {
    const { name, CBU } = req.body;
    const query = `INSERT INTO fundation (name, CBU, collected) VALUES ("${name}", "${CBU}", 0)`;
    console.log("llegue")
    connection.query(query, (err, response, fields) => {
      if (err) throw err;
      res.send("Fundación creada exitosamente");
    });
  });


 // Actualizar una fundación por ID
fundationRoutes.put("/:id", (req, res) => {
    const { name, CBU, collected, id} = req.body;
    
    console.log(id)
    const query = `UPDATE fundation SET name="${name}", CBU="${CBU}", collected=${collected} WHERE id=${id}`;
    
    connection.query(query, (err, response, fields) => {
      if (err) {
        throw err;
      }
      if (response.affectedRows > 0) {
        res.send("Fundación actualizada exitosamente");
      } else {
        res.send("Fundación no encontrada o datos ingresados inválidos");
      }
    });
  });

  // Eliminar una fundación por ID
fundationRoutes.delete("/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM fundation WHERE id=${id}`;

  connection.query(query, (err, response, fields) => {
    if (err) {
      throw err;
    }
    if (response.affectedRows > 0) {
      res.send("Fundación eliminada exitosamente");
    } else {
      res.send("Fundación no encontrada");
    }
  });
});
  

export default fundationRoutes;

