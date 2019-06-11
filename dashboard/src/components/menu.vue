<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 -->

<template>
  <div class="l_menu_s">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      @select="handleSelect"
    >
      <el-menu-item index="11">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>数据</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="module">
        <i class="el-icon-s-help"></i>
        <span slot="title">模型</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">应用</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key,keyPath) {
      console.log(key, keyPath)
      this.$router.push('module')
    }
  }
};
</script>

<style>
.l_menu_s {
  min-height: calc(100vh - 60px);
  min-width: 150px;
}
.el-menu{
  border-right: 0 !important;
}
.main_menu .el-menu {
  border-right: 0;
}
/* .main_menu {
  box-shadow: 0 0 8px 0 #c5d9e8;
}
.el-aside{
  overflow:visible !important; 
} */
.l_group_title {
  padding-left: 22px;
  font-size: 18px;
  color: #3f536e;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 10px;
}
.el-menu-item,
.el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
  color: #3f536e !important;
}
.el-menu-item i, .el-submenu__title i{
  color: #3f536e !important;
}
.el-menu-item.is-active, .el-menu-item:focus, .el-menu-item:hover {
    color: #f5f5f5;
    background: #f3f3f3 !important;
    border-left: 2px solid #409eff;
    font-weight: 700;
    color: #a8c6df;
}
.el-menu-item:focus, .el-menu-item:hover{
   font-weight: 500 !important;
}
.el-menu-item{
    border-left: 2px solid #fff;
}
</style>