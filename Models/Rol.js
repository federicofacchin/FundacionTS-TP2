import connection from "../connectionToDB/connection.js";
import { DataTypes,Model } from "sequelize";



class Rol extends Model {}

Rol.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    sequelize: connection,
    modelName: "Rol"
});

export default Rol;