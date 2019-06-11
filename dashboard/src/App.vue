<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 -->
<template>
  <div id="app">
    <div class="l_main_con">
      <header class="l_header">
        <div class="logo"> <a href="#">CMS-X <i style="" class="el-icon-s-grid"></i> </a></div>
      </header>
      <div class="l_main f_flex">
        <div class="l_side_menu"><Menu></Menu></div>
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
    </el-container> -->
  </div>
</template>

<script>
import Menu from './components/menu'

export default {
  data() {
    return {
      // isCollapse: false
    }
  },
  mounthed() {
    // console.log(this)
  },
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>
body{
  margin: 0;
  background: #f7f7f7;
}
.l_header{
  /* height: 70px; */
  box-shadow: 0 0 8px 0 #c5d9e8;
  line-height: 60px;
  z-index: 10;
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
  padding: 0 26px;
}
.f_flex{
  display: flex;
  justify-content: space-between;
}
.l_content{
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: #3f536e;
  font-size: 14px;
}
.l_side_menu{
  box-shadow: 0 0 8px 0 #c5d9e8;
  background: #fff;
}
.l_main_con{
  position: relative;
}
.l_main{
  padding-top: 60px;
}

.l_header .logo a{
  color: #128bf8;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
}
.el-button{
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
</style>
