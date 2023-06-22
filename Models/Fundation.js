import connection from "../connectionToDB/connection.js";
import { DataTypes,Model } from "sequelize";


class Fundation extends Model {}

Fundation.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    CBU:{
        type:DataTypes.STRING,
        allowNull:false
    },
    collected:{
        type:DataTypes.INTEGER,
        allowNull:true,
       
    }
},{
    sequelize: connection,
    modelName: "Fundation"
});

export default Fundation;