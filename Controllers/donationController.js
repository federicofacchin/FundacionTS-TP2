import {Donation,Person,Fundation,Rol} from "../Models/index.js"

class  DonationController{
    constructor(){

    }
 getAllDonations = async (req,res)=>{
        try {
            const result = await Donation.findAll({
                attributes: ["PersonId","FundationId","amount"]
            })
            if (result.length === 0) throw new Error ("No se encontraron donaciones") 

            res.status(200).send({
                success:true,
                message:"Estas son todas las donaciones encontradas",
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

    getDonationById = async (req,res)=>{
        try {
            const result = await Donation.findByPk(req.body.id)
            if (result.length === 0) throw new Error ("No se encontro la donacion buscada")

            res.status(200).send({
                success:true,
                persona : result.PersonId,
                fundacion: result.FundationId,
                donacion: result.amount,
                
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
                result: error
            })
        }


    }

    createDonation = async(req,res) =>{
        try {
            const {PersonId,FundationId,amount} = req.body
            const personResult = await Person.findByPk(PersonId);
            const fundationResult = await Fundation.findByPk(FundationId);
            const rolResult = await Rol.findByPk(personResult.dataValues.RolId)

            if(rolResult.dataValues.name === "Administrador") throw new Error("Usted no esta autorizado para realizar donaciones")

            if(!personResult){
                    throw new Error("Persona inexistente")
            } else if(personResult.getDataValue('idRol') == 0) {
                throw new Error("Rol invalido")
            }
            if(fundationResult === null){
                throw new Error("Fundacion inexistente")
            }
            const result = Donation.create({PersonId,FundationId,amount})
            if(!result) throw new Error("No se pudo crear la donacion")
            const {id,name,CBU} = fundationResult.dataValues
            var collected = Number(fundationResult.dataValues.collected)
            collected+= Number(amount);
            //console.log(id,name,CBU,collected)

            const resultUpdatedFundation = await Fundation.update({name,CBU,collected},{
                where:{
                    id : id,
                }
            })
            if(resultUpdatedFundation[0] === 0) throw new Error("La fundacion no pudo ser editada")
            
            res.status(200).send("Donacion creada exitosamente");
        } catch (error) {
            res.status(400).send({
                success:false,
                result: error,
                message: error.message
            })
        }
    }

    // modifyDonation = async(req,res) =>{
    //     try {
    //         const {id,idPersona,idFundation,amount} = req.body
    //         const result = await Donation.update({id,idPersona,idFundation,amount},{
    //             where:{
    //                 id : id,
    //             }
    //         })
    //         if(result[0] === 0) throw new Error("La donacion no pudo ser editada")
    //         res.status(200).send("Donacion editada exitosamente");
    //     } catch (error) {
    //         res.status(400).send({
    //             success:false,
    //             result: error,
    //             message: error.message
    //         })
    //     }
    // }
    
    // deleteDonation = async (req,res) => {
    //     try {
    //         const id = req.body.id
    //         const result = await Donation.destroy({
    //             where:{
    //                 id : id,
    //             }
    //         })
    //         res.status(200).send(`Se borro exitosamente la donacion con el id ${id}`)
    //     } catch (error) {
    //         res.status(400).send({
    //             success:false,
    //             result: error,
    //             message: error.message
    //         })
    //     }
    // }
}

export default DonationController