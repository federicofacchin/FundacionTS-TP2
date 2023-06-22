import {Donation} from "../Models/index.js"

const donationSeed = async () => {
    try {
        await  Donation.bulkCreate([{
            idPerson:1,
            idFundation:1,
            amount:3000
        },{
            idPerson:2,
            idFundation:1,
            amount:3000
        }])
    } catch (error) {
        console.log(error)
    }
}
export default donationSeed