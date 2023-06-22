import {Fundation} from "../Models/index.js"


const fundationSeed = async () =>{
    try {
        await Fundation.bulkCreate([{
            name:"Fundacion Pepe Argento",
            CBU:"007582392845"
        },{
            name:"Fundacion Piernitas",
            CBU:"08108883125"
        },{
            name:"Fundacion Oreos",
            CBU:"48702384230"
        }
    ])
    } catch (error) {
        console.log(error)
    }
}
export default fundationSeed