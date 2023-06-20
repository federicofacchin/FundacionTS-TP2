import {Person} from "../Models/index.js"
class PersonController{
    constructor(){  
    }

    
    getAllPersons = async (req,res)=>{
        try {
            const result = await Person.findAll({
                attributes: ["name","lastName","email"]
            })
            if (result.length === 0) throw new Error ("No se encontraron personas") 

            res.status(200).send({
                success:true,
                message:"Estas son todas las personas encontradas",
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

    getPersonById = async (req,res)=>{
        try {
            const result = await Person.findByPk(req.body.id)
            if (result.length === 0) throw new Error ("No se encontro a la persona buscada")

            res.status(200).send({
                success:true,
                nombre : result.name,
                apellido: result.lastName,
                email : result.email
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
                result: error
            })
        }


    }

    createPerson = async(req,res) =>{
        try {
            const {name,lastName,email,password,rolId} = req.body
            const result = Person.create({name,lastName,email,password,rolId})
            if(!result) throw new Error("No se pudo crear la persona")
            res.status(200).send("Persona creada exitosamente");
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }

    modifyPerson = async(req,res) =>{
        try {
            const {id,name,lastName,email,password,rolId} = req.body
            const result = await Person.update({name,lastName,email,password,rolId},{
                where:{
                    id : id,
                }
            })
            if(result[0] === 0) throw new Error("La persona no pudo ser editada")
            res.status(200).send("Persona editada exitosamente");
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }
    
    deletePerson = async (req,res) => {
        try {
            const id = req.body.id
            const result = await Person.destroy({
                where:{
                    id : id,
                }
            })
            res.status(200).send(`Se borro exitosamente la Persona con el id ${id}`)
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }
}

export default PersonController