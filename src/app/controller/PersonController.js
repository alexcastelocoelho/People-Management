const personService = require("../service/PersonService")

class PersonController {
    async create(req, res ) {
        try {
            const result = await personService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async list(req, res) {
        try {
            const result = await personService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error) 
        }
    }

    async getById(req, res) {
        try {
            const result = await personService.getById(req.params.id) 
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async update(req, res) {
        try {
            const result = await personService.update(req.params.id, req.body)
            return res.status(200).json("person data update completed")
        } catch (error) {
            return res.status(400).json(error);
          }
    }

    async delete(req, res) {
        try {
            const result = await personService.delete(req.params.id)

            if (!result) {
                return res.status(200).json("unknown person id")
            }
            return res.status(200).json("successfully deleted person")
        } catch (error) {
            return res.status(400).json(error);
          } 
    }
}


module.exports = new PersonController()