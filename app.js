import express from "express";
const app = express();
import router from "./routes/router.js"

//middleWare
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",router);


//server
app.listen(8080,()=>{
    console.log("puerto ok http://localhost:8080")
});