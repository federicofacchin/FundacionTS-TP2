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
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    rolId:{
        type:DataTypes.INTEGER,
        allowNull:false 
    }
},{
    sequelize: connection,
    modelName: "Person"
});

export default Person;