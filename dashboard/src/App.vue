<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-12
 -->
<template>
  <div id="app">
    <div class="l_main_con">
      <header class="l_header l_flex">
        <div class="logo">
          <a href="#">
            CMS-X
            <i style class="el-icon-s-grid"></i>
          </a>
        </div>
        <div style="margin-left:auto;">
          <span class="f14 ml20">全部应用</span>
          <span class="inline_block ml20">
            <el-select v-model="value" placeholder="HelloWorld" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
          <!-- </div>
          <div style="margin-left:auto">-->
          <el-dropdown style="padding: 0 20px">
            <span class="el-dropdown-link">
              Admin
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown style="padding: 0 20px;">
            <span class="el-dropdown-link" style="cursor:pointer">
              简体中文
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="l_main f_flex">
        <div class="l_side_menu">
          <Menu></Menu>
        </div>
        <div class="l_content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- <el-container>
      <el-header class="l_header">Header</el-header>
    <el-container>
      <el-aside style="width:auto;">
        <Menu></Menu>
      </el-aside>
      <el-main>main</el-main>
    </el-container>
    </el-container>-->
  </div>
</template>

<script>
import Menu from "./components/menu";

export default {
  data() {
    return {
      // isCollapse: false
    };
  },
  mounthed() {
    // console.log(this)
  },
  name: "app",
  components: {
    Menu
  }
};
</script>

<style>
body {
  margin: 0;
  background: #f1f4f7;
}
.l_header {
  /* height: 70px; */
  /* box-shadow: 0 0 8px 0 #c5d9e8; */
  line-height: 60px;
  z-index: 10;
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
  /* padding: 0 26px; */
}
.f_flex {
  display: flex;
  justify-content: space-between;
}
.l_content {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: #3f536e;
  font-size: 14px;
}
.l_side_menu {
  /* box-shadow: 0 0 8px 0 #c5d9e8; */
  background: #fff;
}
.l_main_con {
  position: relative;
}
.l_main {
  padding-top: 60px;
}

.l_header .logo {
  background: linear-gradient(100deg, #1c5de7, #1c91e7);
  width: 150px;
}

.l_header .logo a {
  color: #fff;
  font-weight: bold;
  padding-left: 20px;
  font-size: 20px;
  text-decoration: none;
}
.el-button {
  font-weight: normal !important;
}
.el-card__body {
  padding: 14px 20px;
  /* padding-top: 7px !important; */
}
.el-card__header {
  padding: 14px 20px;
  border-bottom: none !important;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  color: #3f536e;
  padding-bottom: 7px !important;
}
.el-checkbox-button__inner,
.el-radio,
.el-checkbox {
  font-weight: normal !important;
}
.el-table__row {
  font-weight: normal !important;
}
.l_data_con {
  height: calc(100vh + 36px);
}
th {
  font-weight: normal;
}
.l_flex {
  display: flex;
}
.inline_block {
  display: inline-block;
}
.ml20 {
  margin-left: 20px;
}
.f14 {
  font-size: 14px;
}
.el-button--primary {
  color: #fff;
  background: linear-gradient(315deg, #0097f6, #005eea) !important;
  border-color: #2d7bf1 !important;
}
.el-table {
  color: #3f536e !important;
}
.el-card {
  box-shadow: none !important;
  border: none !important;
}
</style>
