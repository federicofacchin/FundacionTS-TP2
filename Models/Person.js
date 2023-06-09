import connection from "../connectionToDB/connection.js";
import { DataTypes,Model } from "sequelize";


class Person extends Model {}

Person.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true,
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false 
    }
},{
    sequelize: connection,
    modelName: "Person"
});

export default Person;