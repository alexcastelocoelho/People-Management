const {Router} = require("express")
const Person = require("./PersonRouter")
module.exports = (server) => {
    server.use((req, res, next) => {
        Person(server, new Router())
        

        next();
    })
}