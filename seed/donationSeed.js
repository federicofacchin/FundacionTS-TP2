import {Donation} from "../Models/index.js"
const donationSeed = async () => {
    
    try {
        await  Donation.bulkCreate([{
            PersonId:1,
            FundationId:1,
            amount:3000
        },{
            PersonId:2,
            FundationId:1,
            amount:3000
        }])
    } catch (error) {
        console.log(error)
    }
}
export default donationSeed