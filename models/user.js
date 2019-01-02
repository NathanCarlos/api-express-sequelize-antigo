'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
  })

  User.associate = function (models) {
    models.User.hasMany(models.Task)
  }

  return User
}
