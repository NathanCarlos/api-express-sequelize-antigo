const models = require('../models')
class UserServices {
  static async findUsers () {
    try {
      let response = await models.User.findAll({
        include: [models.Task]
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async createUser (username, email, password) {
    try {
      let response = await models.User.create({
        username,
        email,
        password
      })
      response.password = '******'
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async updateUser (id, username, email, password) {
    try {
      let response = await models.User.update(
        {
          username,
          email,
          password
        },
        { where: { id } }
      )
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async deleteUser (id) {
    try {
      let response = await models.User.destroy({
        where: { id }
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async authUser (email, password) {
    try {
      let response = await models.User.findAll({
        where: { email, password }
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
}
module.exports = UserServices
