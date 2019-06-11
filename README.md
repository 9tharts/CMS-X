<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 -->
# CMS-X
A Headless CMS

 ### 安装 ###
 `npm i` 安装依赖 
 
 `npm start` 运行项目

### 使用 ###
控制台静态页面部分已经默认构建，在 `dashboard/dist` 目录下，`dashboard` 目录是控制台前端部分开发目录。 

访问 `http://localhost:5000` 即可进行操作。


 ### 路由结构说明 ###
 * URL 由三层结构组成 域名+模型+id，用 Http 方法来区分操作
 * 路由结构必须使用标准 RESTful 结构

示例：
 * `GET`  读取  `http://xx.com/article/1?name` 表示查询对应结构(模型)下对应 id 为 1 文章的 name (参数)，其中参数为空时获取全部信息
 * `POST` 新建  `http://xx.com/article?name=hello&content=world` 创建新文章(fix me:JOSN 类型提交)
 * `PUT`  更新  `http://xx.com/article/1?name=fun` 更新文章结构(模型)下 id 为 1 的文章 name 为 fun
 * `DELETE` 删除 `http://xx.com/article/1` 删除对应结构为 article 下 id 为 1 的文章
 