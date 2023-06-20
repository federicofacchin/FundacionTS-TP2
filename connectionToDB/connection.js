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


export default connection