//TODO 动态切换
const datasource = require('../model/datasource').mysql()

const object = {
    /**
     * 查询模型
     * @param {int} appid 应用id
     */
    async queryModel(appid) {
        return await datasource.query('select TABLE_NAME as name,TABLE_COMMENT as comment from information_schema.tables WHERE table_schema=\'cms_'+ appid + '\' and table_type=\'base table\'')
    },

    /**
     * 创建模型
     * @param {int} appid 应用id
     * @param {String} name 模型名称
     * @param {String} comment 模型注释
     */
    async createModel(appid, name, comment) {
        let sql = 'create table `cms_' + appid + '`.`' + name + '` (id int comment \'id\') comment \'' + comment + '\''
        try {
            await datasource.query(sql)
        } catch (error) {
            console.log(error)            
        }
    },

    /**
     * 移除模型
     * @param {int} appid 应用id
     * @param {String} name 模型名称
     */
    async removeModel(appid, name) {
        let sql = 'drop table `cms_`' + appid + '`.`' + name
        datasource.query(sql)
    },

    /**
     * 修改模型
     * @param {int} appid 应用id
     * @param {String} targetName 原模型名称
     * @param {String} subName 新模型名称
     * @param {String} comment 新模型注释
     */
    async alterModel(appid, targetName, subName, comment) {
        let tableName = 'cms_' + appid
        datasource.query('rename table `' + tableName +'`.`'+ targetName + '` to `'+ tableName + '`.`'+ subName + '`')
        datasource.query('alter table `'+ tableName+'`.`'+subName + '` comment \''+comment+'\'')
    }
}

module.exports = object