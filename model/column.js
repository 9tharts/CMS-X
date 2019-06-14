const Sequelize = require('sequelize')
const datasource = require('../model/datasource')
const mysql = datasource.mysql()
const mysqlError = datasource.mysqlErr

const instance = {
    /**
     * 查询模型结构
     * @param {Number} appid 应用id
     * @param {String} moduleName 模型名称
     */
    async queryColumns(appid, moduleName) {
        return await mysql.query(`select COLUMN_NAME name, COLUMN_COMMENT comment, DATA_TYPE type, if(IS_NULLABLE='YES', 0, 1) as nullable from INFORMATION_SCHEMA.Columns where table_schema='cms_${appid}' and table_name='${moduleName}'`, { type: Sequelize.QueryTypes.SELECT })
    },

    /**
     * 删除属性
     * @param {Number} appid 应用id
     * @param {String} moduleName 模型名称
     * @param {String} columnName 属性名称
     * @example removeColumn(1, 'article2', 'age')
     */
    async removeColumn(appid, moduleName, columnName) {
        await mysql.query(`alter table cms_${appid}.${moduleName} drop column \`${columnName}\``).catch(error => {
            mysqlError(error)
        })
    },

    /**
     * 新增属性
     * @param {Number} appid  应用id
     * @param {String} moduleName 模型名称
     * @param {String} column 列对象
     * @example createColumn(1, 'article2', {name: 'num1', type: 'Number', nonull: 1, comment: '数量'})
     */
    async createColumn(appid, moduleName, column) {
        convertColumnAttr(column)
        await mysql.query(`alter table cms_${appid}.${moduleName} add column \`${column.name}\` ${column.type} ${column.nullableRes} comment '${column.comment}'`).catch(error => {
            mysqlError(error)
        })
    },

    /**
     * 修改属性
     * @param {Number} appid  应用id
     * @param {String} moduleName 模型名称
     * @param {String} targetName 原列名称
     * @param {String} column 列对象
     * @example alterColumn(1, 'article2', 'num', {name: 'num3', type: 'String', nonull: 1, comment: '数量'})
     */
    async alterColumn(appid, moduleName, targetName, column) {
        convertColumnAttr(column)
        await mysql.query(`alter table cms_${appid}.${moduleName} change \`${targetName}\` \`${column.name}\` ${column.type} ${column.nullableRes} comment '${column.comment}'`).catch(error => {
            mysqlError(error)
        })
    }
}

/**
 * 转换列属性
 * @param {Object} column 单列
 */
const convertColumnAttr = (column) => {
    //是否允许空
    column.nullableRes = ''
    if (column.nullable != 1) {
        column.nullableRes = 'not null'
    }

    //字段类型
    switch (column.type) {
        case 'String':
            column.type = 'varchar(200)'
            break
        case 'Text':
            column.type = 'text'
            break
        case 'Number':
            column.type = 'double(11,2)'
            break
        case 'Boolean':
            column.type = 'tinyint(1)'
            break
        case 'Date':
            column.type = 'datetime'
            break
        case 'Password':
            //TODO 加密
            column.type = 'varchar(100)'
            break
        case 'Media':
            column.type = 'varchar(100)'
            break
        default:
            throw '字段类型不支持';
    }
}

module.exports = instance