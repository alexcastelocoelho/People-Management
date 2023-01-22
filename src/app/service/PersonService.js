const personRepository = require("../repository/PersonRepository")

class PersonService {
    async create(payload) {           
           const result = await personRepository.create(payload)
           return result             
    }

    async list(payload) {
        const result = await personRepository.list(payload)
        return result
    }

    async getById(id) {
        const result = await personRepository.getById(id)
        return result
    }

    async update(id, payload) {
        const result = await personRepository.update(id, payload)
        return result
    }

    async delete(id) {
        const result = await personRepository.delete(id)
        return result
    }
}


module.exports = new PersonService()