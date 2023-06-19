import mysql from "mysql2";

//connexion a la Db con sequelize
import {Sequelize} from "sequelize";
import {database, username,password,host,dialect,dbPort,serverPort} from "../../FundacionTS-TP2/config/config.js"

const connection = new Sequelize(database, username, password, {
    host,
    dialect,
    dbPort
});

try {
    await connection.authenticate()
    console.log("conectado a la base de datos")
} catch (error) {
    console.log(`error: ${error}`)
}

//conexion vieja con mysql2
/*const connection = mysql.createConnection({
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
*/

export default connection