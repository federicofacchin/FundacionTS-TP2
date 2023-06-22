import {Rol} from "../Models/index.js"

const rolSeed = async () => {
    try {
        await  Rol.bulkCreate([{
            name:"Administrador",
            description:"Administrador del Sistema"
        },{
            name:"Cliente",
            description:"Cliente del Sistema"
        }])
    } catch (error) {
        console.log(error)
    }
}
export default rolSeed