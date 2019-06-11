<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 -->
<template>
  <div>
    <el-row type="flex" :gutter="20">
      <el-col :span="5">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>所有模型</span>
              <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
            </div>
            <div><el-input size="medium" v-model="input" placeholder="搜索模型名称"></el-input></div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="19">
        <div>
          <el-card>
            <div slot="header" class="clearfix">
              <span>数据</span>
              <el-button style="float: right; padding: 3px 10px" type="text">新增</el-button>
              <el-button style="float: right; padding: 3px 10px" type="text">查询</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "module"
};
</script>

<style>
</style>


