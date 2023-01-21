const express = require("express")
const route = require("./routes")
require("./database/postgresql/Index").sync()
class App {
    constructor() {
        this.server = express()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.server.use(express.json())
    }

    routes() {
        route(this.server)
    }


}

module.exports = new App().server