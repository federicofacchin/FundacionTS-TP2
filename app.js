import express from "express";
const app = express();
import router from "./routes/router.js"
import connection from "./connectionToDB/connection.js"
import { serverPort } from "./config/config.js";
import personSeed from "./seed/personSeed.js";
import rolSeed from "./seed/rolSeed.js";
import donationSeed from "./seed/donationSeed.js"

//middleWare
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",router);

//hasta aca
//sincroniza la db y si existen las tablas el force:true las dropea y las vuelve a crear. usar force:false luego de crear las tablas
await connection.sync({force:true}).then(() =>{
    //server
    app.listen(serverPort,()=>{
        console.log("puerto ok http://localhost:8080")
    });    
}).then(() => personSeed()).then(() => rolSeed()).then(() => donationSeed)  ;



