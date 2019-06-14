/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-14
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 */
const Sequelize = require('sequelize')
//TODO 动态切换
const datasource = require('../model/datasource')
const mysql = datasource.mysql()
const mysqlErr = datasource.mysqlErr

const instance = {
    /**
     * 查询模型
     * @param {Number} appid 应用id
     */
    async queryModel(appid) {
        return await mysql.query(`select TABLE_NAME as name,TABLE_COMMENT as comment from information_schema.tables WHERE table_schema='cms_${appid}' and table_type='base table'`, { type: Sequelize.QueryTypes.SELECT })
    },

    /**
     * 创建模型
     * @param {int} appid 应用id
     * @param {String} name 模型名称
     * @param {String} comment 模型注释
     */
    async createModel(appid, name, comment) {
        let sql = `create table cms_${appid}.${name} (id int not null AUTO_INCREMENT comment 'id', PRIMARY KEY (id)) comment '${comment}'`
        await mysql.query(sql).catch(error => {
            mysqlErr(error)
        })
    },

    /**
     * 移除模型
     * @param {int} appid 应用id
     * @param {String} name 模型名称
     */
    async removeModel(appid, name) {
        await mysql.query(`drop table cms_${appid}.${name}`).catch(error => {
            mysqlErr(error)
        })
    },

    /**
     * 修改模型
     * @param {int} appid 应用id
     * @param {String} targetName 原模型名称
     * @param {String} subName 新模型名称
     * @param {String} comment 新模型注释
     */
    async alterModel(appid, targetName, subName, comment) {
        try {
            if(targetName != subName) {
                await mysql.query(`rename table cms_${appid}.${targetName} to cms_${appid}.${subName}`)
            }
            await mysql.query(`alter table cms_${appid}.${subName} comment '${comment}'`)
        } catch (error) {
            mysqlErr(error)
        }
        // fix me 如果这边只是改 comment ，前面一句改表名语句会提示重命名的已存在
    }
}

module.exports = instance