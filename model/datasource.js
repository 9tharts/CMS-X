const Sequelize = require('sequelize')
const config = require('../config/config')


const sequelize = {
    mysql() {
        return new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
            host: config.mysql.host,
            port: config.mysql.port,
            dialect: 'mysql'
        })
    }
}

module.exports = sequelize