import connection from "../connectionToDB/connection.js";
import { DataTypes,Model } from "sequelize";


class Donation extends Model {}

Donation.init({
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
},{
    sequelize: connection,
    modelName: "Donation"
});

export default Donation;