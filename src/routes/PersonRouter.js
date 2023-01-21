const personController = require("../app/controller/PersonController")
const personValidation = require("../app/validations/PersonValidation")
const personValidateUpdate = require("../app/validations/PersonValidateUpdate")
module.exports = (server, routes, prefix = "/people" ) => {
    routes.post("/",  personValidation ,personController.create)
    routes.get("/", personController.list)
    routes.get("/:id", personController.getById)
    routes.put("/:id", personValidateUpdate, personController.update)
    routes.delete("/:id", personController.delete)
    
    server.use(prefix,routes)
}