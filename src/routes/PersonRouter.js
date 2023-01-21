const personController = require("../app/controller/PersonController")

module.exports = (server, routes, prefix = "/people" ) => {
    routes.post("/",  personController.create)
    routes.get("/", personController.list)
    routes.get("/:id", personController.getById)
    routes.put("/:id", personController.update)
    routes.delete("/:id", personController.delete)
    
    server.use(prefix,routes)
}