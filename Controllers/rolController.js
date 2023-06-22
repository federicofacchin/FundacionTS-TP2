import {Rol} from "../Models/index.js"
class RolController{
    constructor(){
    }

    getAllRols = async (req, res) => {
        try {
            const result = await Rol.findAll({
                attributes: ["id", "name", "description"]
            })
            if(result.length === 0) throw new Error("No se encontraron Roles")

            res.status(200).send({
                success:true,
                message:"Estas son los Roles encontrados",
                result
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
                result: error
            })
        }
    }

    getRolById = async (req, res) => {
        try {
            const result = await Rol.findByPk(req.body.id)
            if (!result) throw new Error ("No se encontro al Rol")

            res.status(200).send({
                success:true,
                message:"Este es el Rol pedido",
                result: {
                    name: result.getDataValue("name"),
                    description: result.getDataValue("description")
                }
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
                result: error
            })
            
        }
    }
}

export default RolController