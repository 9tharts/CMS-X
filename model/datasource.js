const Sequelize = require('sequelize')
const config = require('../config/config')


const instance = {
    mysql() {
        return new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
            host: config.mysql.host,
            port: config.mysql.port,
            dialect: 'mysql'
        })
    },

    mysqlErr(err) {
        // console.log(err)
        if (err && err.original) {
            switch (err.original.errno) {
                //表名超过长度限制
                case 1059: throw '名称不合法'
                //表已存在
                case 1050: throw '名称已存在'
                //表不存在
                case 1051: throw '名称不存在'
                //表申明不存在
                case 1017: throw '资源不存在'
                //1064 sql异常
                default: throw '数据库操作异常'
            }
        }
    }
}

module.exports = instance