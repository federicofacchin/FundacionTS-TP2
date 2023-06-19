import { Router, response } from "express";
const personRoutes = Router();

import connection from "../connectionToDB/connection.js";
import PersonController from "../Controllers/personController.js";
const personController = new PersonController();

personRoutes.get("/",personController.getAllPersons);

personRoutes.get("/:id",personController.getPersonById);

/*personRoutes.get("/", (req,res) => {
    const query = "SELECT name, lastName, email FROM people";
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send(response)
    });
});

personRoutes.get("/:id", (req,res) => {
    //me traigo lo que llega de un formulario del front
    const id = req.body.id
     //defino query
    const query = `SELECT name , lastName , email FROM people WHERE id=${id}`
    //ejecuto query
    connection.query(query, (err,response,fields)=>{
        console.log("entro")
        if(err){
            console.log("error")
            res.send("Usuario no encontrado")
            throw err
        }
        //envio Rta al cliente
        res.send(response)
    })
});
*/
personRoutes.post("/", (req,res) => {
    const {name, lastName,password,email} = req.body
    const query = `INSERT INTO people(name,lastName,password,email) VALUES("${name}", "${lastName}" ," ${password} ","${email}")`;
    
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.status(201).send("usuario creado exitosamente");
    });
});

personRoutes.put("/:id", (req,res) => {
    const {name, lastName,password,email,id} = req.body
    const query = `UPDATE people SET name="${name}",lastName="${lastName}",password="${password}",email="${email}" WHERE id=${id}`;

    connection.query(query, (err , response , fields) => {
        if (err){
            throw err
        }
        //si devuelve 0 seria false
        //preguntar profesor, si no le edito ningun campo va por el else, asimismo si el usuario no existe, no se si esta bien asi.
        response.changedRows ? res.send("Persona editada") : res.send("usuario no encontrado, o datos ingresados invalidos");
    });
});

personRoutes.delete("/:id", (req,res) => {
    const id = req.body.id
    console.log(id)
    const query = `DELETE FROM people WHERE id =${id}`
    //parece que la query se ejecuta pero no borra nada y no tira ningun error
    
    connection.query(query, (err , response , fields) => {
        console.log(response)
        if (err){
            throw err
        }
        response.affectedRows ? res.send("borro persona por id") : res.send("usuario no encontrado");
    });
});


export default personRoutes;