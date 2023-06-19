import Person from "../Models/Person.js"
class PersonController{
    constructor(){  
    }

    
    getAllPersons = async (req,res)=>{
        try {
            const result = await Person.findAll()
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

}

export default PersonController