import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"",
    database: "fundacionts",
});

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log("conectado a la base de datos");
});

export default connection