import {Fundation} from "../Models/index.js"



const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const generarCBU = () => `${random(10000000000,99999999999)}${random(10000000000,99999999999)}`

const fundationSeed = async () =>{
    try {
        await Fundation.bulkCreate([{
            name: 'Acnur',
            CBU: generarCBU(),
            collected: 25000
            
        },{
            name: 'Caritas',
            CBU: generarCBU(),
            collected: 2500
        },{
            name: 'Fundación Reciduca',
            CBU: generarCBU(),
            collected: 5000
        },{
            name: 'GreenPeace',
            CBU: generarCBU(),
            collected: 35000
        },{
            name:'TECHO',
            CBU: generarCBU(),
            collected: 28090
        },{
            name: 'UNICEF',
            CBU: generarCBU(),
            collected: 0
        }
    ])
    } catch (error) {
        console.log(error)
    }
}
export default fundationSeed