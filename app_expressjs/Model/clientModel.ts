import db from "../db.js"
import sequelize from "sequelize"

export default db.define('client', {
    id: {
        type:sequelize.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name: {
        type: sequelize.STRING,
        allowNull:false
    },
    email: {
        type: sequelize.STRING,
        allowNull:false
    }
})