
const personModel = require("../model/PersonModel")

class PersonRepository {
    async create(payload) {
        const response = personModel.create(payload)
        return response
    }

    async list(payload) {
        const response = await personModel.findAll(payload)
        return response
    }

    async getById(id) {
        const response = await personModel.findByPk(id)
        return response
    }

    async update(id, payload) {       
        const response = await personModel.update(payload, {where: {id: id}})
        return response        
    }

    async delete(id) {        
        const response = await personModel.destroy({where: {id: id}})
        return response
    }
}

module.exports = new PersonRepository()