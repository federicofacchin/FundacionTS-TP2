import { Router, response } from "express";
const clientRoutes = Router();

import connection from "../connectionToDB/index.js";

clientRoutes.get("/", (req,res) => {
    const query = "SELECT name, lastName, email FROM client";
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send(response)
    });
});

clientRoutes.get("/:id", (req,res) => {
    //me traigo lo que llega de un formulario del front
    const id = req.body.id
     //defino query
    const query = `SELECT name , lastName , email FROM client WHERE id=${id}`
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

clientRoutes.post("/", (req,res) => {
    const {name, lastName,password,email} = req.body
    const query = `INSERT INTO client(name,lastName,password,email) VALUES("${name}", "${lastName}" ," ${password} ","${email}")`;
    
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send("usuario creado exitosamente");
    });
});

clientRoutes.put("/:id", (req,res) => {
    const {name, lastName,password,email,id} = req.body
    const query = `UPDATE client SET name="${name}",lastName="${lastName}",password="${password}",email="${email}" WHERE id=${id}`;

    connection.query(query, (err , response , fields) => {
        if (err){
            throw err
        }
        //si devuelve 0 seria false
        //preguntar profesor, si no le edito ningun campo va por el else, asimismo si el usuario no existe, no se si esta bien asi.
        response.changedRows ? res.send("Cliente editado") : res.send("usuario no encontrado, o datos ingresados invalidos");
    });
});

clientRoutes.delete("/:id", (req,res) => {
    const id = req.body.id
    console.log(id)
    const query = `DELETE FROM client WHERE id =${id}`
    //parece que la query se ejecuta pero no borra nada y no tira ningun error
    
    connection.query(query, (err , response , fields) => {
        console.log(response)
        if (err){
            throw err
        }
        response.affectedRows ? res.send("borro cliente por id") : res.send("usuario no encontrado");
    });
});


export default clientRoutes;