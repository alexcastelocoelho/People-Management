const express = require("express")
const route = require("./routes")
const swagger = require("swagger-ui-express")
const swaggerDocs = require("./app/docs/Swagger.json")
require("./database/postgresql/Index").sync()
class App {
    constructor() {
        this.server = express()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.server.use(express.json())
        this.server.use("/api-docs", swagger.serve, swagger.setup(swaggerDocs))
    }

    routes() {
        route(this.server)
    }


}

module.exports = new App().server