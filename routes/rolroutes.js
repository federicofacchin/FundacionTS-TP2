import { Router, response } from "express";
const rolRoutes = Router();

import connection from "../connectionToDB/connection.js";

rolRoutes.get("/", (req,res) => {
    const query = "SELECT id, name FROM rol";
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send(response)
    });
});

rolRoutes.get("/:id", (req,res) => {
    //me traigo lo que llega de un formulario del front
    const id = req.body.id
     //defino query
    const query = `SELECT id, name  FROM rol WHERE id=${id}`
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

rolRoutes.post("/", (req,res) => {
    const {name} = req.body
    const query = `INSERT INTO Rol(name) VALUES("${name}")`;
    
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send("rol creado exitosamente");
    });
});


export default rolRoutes;