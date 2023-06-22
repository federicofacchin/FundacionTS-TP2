import {Fundation} from "../Models/index.js"
class FundationController{
    constructor(){  
    }

    
    getAllFundations = async (req,res)=>{
        try {
            const result = await Fundation.findAll({
                attributes: ["name","CBU","collected"]
            })
            if (result.length === 0) throw new Error ("No se encontraron fundaciones") 

            res.status(200).send({
                success:true,
                message:"Estas son todas las fundaciones encontradas",
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

    getFundationById = async (req,res)=>{
        try {
            const result = await Fundation.findByPk(req.body.id)
            if (result.length === 0) throw new Error ("No se encontro a la fundacion buscada")

            res.status(200).send({
                success:true,
                nombre : result.name,
                CBU: result.CBU,
                collected : result.collected
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
                result: error
            })
        }


    }

    createFundation = async(req,res) =>{
        try {
            const {name,CBU, collected} = req.body
            const result = Fundation.create({name,CBU,collected})
            if(!result) throw new Error("No se pudo crear la fundacion")
            res.status(200).send("fundacion creada exitosamente");
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }

    modifyFundation = async(req,res) =>{
        try {
            const {id,name,CBU,collected} = req.body
            const result = await Fundation.update({name,CBU,collected},{
                where:{
                    id : id,
                }
            })
            if(result[0] === 0) throw new Error("La fundacion no pudo ser editada")
            res.status(200).send("Fundacion editada exitosamente");
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }
    
    deleteFundation = async (req,res) => {
        try {
            const id = req.body.id
            const result = await Fundation.destroy({
                where:{
                    id : id,
                }
            })
            res.status(200).send(`Se borro exitosamente la Fundacion con el id ${id}`)
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }
}

export default FundationController