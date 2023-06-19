import { Router, response } from "express";
const donationRoutes = Router();

import connection from "../connectionToDB/connection.js";

donationRoutes.get("/", (req,res) => {
    const query = "SELECT id, idPerson, idFundation, amount  FROM donation";
    connection.query(query, (err , response , fields) => {
        if (err) throw err
        res.send(response)
    });
});


export default donationRoutes;