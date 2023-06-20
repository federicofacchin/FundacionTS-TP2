import {Person} from "../Models/index.js"


const personSeed = async () =>{
    try {
        await Person.bulkCreate([{
            name:"pepe",
            lastName:"grillo",
            email:"pepe@grillo.com",
            password:1234
        },{
            name:"jorge",
            lastName:"ramirez",
            email:"jorge@ramirez.com",
            password:1234
        },{
            name:"Damian",
            lastName:"lopez",
            email:"Damian@lopez.com",
            password:1234
        },{
            name:"Leandro",
            lastName:"Perez",
            email:"Leandro@Perez.com",
            password:1234
        }
    ])
    } catch (error) {
        console.log(error)
    }
}
export default personSeed