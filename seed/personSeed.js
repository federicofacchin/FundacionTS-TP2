import {Person} from "../Models/index.js"


const personSeed = async () =>{
    try {
        await Person.bulkCreate([{
            name:"donante1",
            lastName:"donante1",
            email:"donante1@donante1.com",
            RolId:2,
            password:1234
        },{
            name:"donante2",
            lastName:"donante2",
            email:"donante2@donante2.com",
            RolId:2,

            password:1234
        },{
            name:"donante3",
            lastName:"donante3",
            RolId:2,
            email:"donante3@donante3.com",
            password:1234
        },{
            name:"Admin",
            lastName:"Admin",
            RolId:1,
            email:"Admin@Admin.com",
            password:1234
        }
    ])
    } catch (error) {
        console.log(error)
    }
}
export default personSeed