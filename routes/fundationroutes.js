import { Router, response } from "express";
const fundationRoutes = Router();

import connection from "../connectionToDB/connection.js";

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

export default fundationRoutes;