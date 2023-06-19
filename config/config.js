import "dotenv/config"

const database = process.env.DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.HOST
const dialect = process.env.DIALECT
const dbPort  = process.env.DB_PORT
const serverPort = process.env.SERVER_PORT

//lo exporto sin el default por que le da el nombre por defecto, pero al ser un objeto no tiene uno
//si lo exporto como un objeto de esta manera lo puedo desestructurar despues,sino tendria que ponerle un nombre si o si 
export {database, username,password,host,dialect,dbPort,serverPort}