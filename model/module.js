/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-14
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 */
const Sequelize = require('sequelize')
//TODO 动态切换
const datasource = require('../model/datasource').mysql()

const object = {
    /**
     * 查询模型
     * @param {Number} appid 应用id
     */
    async queryModel(appid) {
        return await datasource.query(`select TABLE_NAME as name,TABLE_COMMENT as comment from information_schema.tables WHERE table_schema='cms_${appid}' and table_type='base table'`, { type: Sequelize.QueryTypes.SELECT })
    },

    /**
     * 创建模型
     * @param {int} appid 应用id
     * @param {String} name 模型名称
     * @param {String} comment 模型注释
     */
    async createModel(appid, name, comment) {
        let sql = `create table cms_${appid}.${name} (id int comment 'id') comment '${comment}'`
        try {
            console.log(await datasource.query(sql))
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
        datasource.query(`drop table cms_${appid}.${name}`)
    },

    /**
     * 修改模型
     * @param {int} appid 应用id
     * @param {String} targetName 原模型名称
     * @param {String} subName 新模型名称
     * @param {String} comment 新模型注释
     */
    async alterModel(appid, targetName, subName, comment) {
        datasource.query(`rename table cms_${appid}.${targetName} to cms_${appid}.${subName}`)
        datasource.query(`alter table cms_${appid}.${subName} comment '${comment}'`)
    }
}

module.exports = object