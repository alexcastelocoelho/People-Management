const {DataTypes} = require("sequelize")
const database = require("../../database/postgresql/Index.js")

const Person = database.define("Person", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true           
       
    }, 
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: {
            msg: "person with cpf already exists"
        }
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(16),
        allowNull: false
    }
}, {timestamps: false})

const person = Person

module.exports = person

