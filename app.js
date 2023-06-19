import express from "express";
const app = express();
import router from "./routes/router.js"
import connection from "./connectionToDB/connection.js"
import { serverPort } from "./config/config.js";

//middleWare
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",router);

//momentaneamente lo uso aca
import Person from "./Models/Person.js";
//hasta aca
//sincroniza la db y si existen las tablas el force:true las dropea y las vuelve a crear. usar force:false luego de crear las tablas
await connection.sync({force:false}).then(() =>{
    //server
    app.listen(serverPort,()=>{
        console.log("puerto ok http://localhost:8080")
    });    
})



