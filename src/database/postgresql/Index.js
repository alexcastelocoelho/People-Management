const {Sequelize} = require("sequelize")
require("dotenv/config")

const connectionUrl = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`)

module.exports = connectionUrl

