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
              <el-button @click="showAddModal" style="float: right; padding: 3px 0" type="text">添加</el-button>
            </div>
            <div>
              <el-input size="medium" v-model="searchString" placeholder="搜索模型名称"></el-input>
              <div class="module_list_con">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="2">
                    <span slot="title">模型1</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <span slot="title">模型2</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">模型3</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="19">
        <div>
          <el-card>
            <div slot="header" class="clearfix">
              <span>数据</span>
              <el-button style="float: right; padding: 3px 10px" type="text">接口地址</el-button>
              <el-button style="float: right; padding: 3px 10px" type="text">查询</el-button>
              <el-button
                @click="showAddRow"
                style="float: right; padding: 3px 10px"
                type="text"
              >添加列(字段)</el-button>
              <div style="margin-top:20px;">
                <ListTable></ListTable>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- 添加模型 -->
    <el-dialog title="添加模型" :visible.sync="isShowAddModal" width="50%">
      <div>
        <el-form ref="form" :model="form" label-width="70px" :inline="false">
          <el-form-item label="模型标识" size="small">
            <el-input placeholder="英文开头+英文、数字" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="备注名称" size="small">
            <el-input placeholder="显示该字段的备注名称" v-model="form.name"></el-input>
          </el-form-item>
          <el-divider>高级设置</el-divider>
          <el-form-item label="权限" size="small">
            <el-radio-group v-model="form.resource">
              <el-radio label="所有人"></el-radio>
              <el-radio label="登录用户"></el-radio>
              <el-radio label="用户组"></el-radio>
              <el-radio label="禁止访问"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加字段 -->

    <el-dialog title="添加字段" :visible.sync="isShowAddRow" width="50%">
      <div>
        <el-form ref="form" :model="form" label-width="70px" :inline="false">
          <el-form-item label="字段名称" size="small">
            <el-input placeholder="英文开头+英文、数字" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="备注名称" size="small">
            <el-input placeholder="显示该字段的备注名称" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="字段类型" size="small">
            <el-select v-model="form.type" placeholder="请选择字段类型">
              <el-option label="短文本(string)" value="string"></el-option>
              <el-option label="富文本(string)" value="string"></el-option>
              <el-option label="数字(number)" value="number"></el-option>
              <el-option label="布尔(boolean)" value="boolean"></el-option>
              <el-option label="日期(date)" value="date"></el-option>
              <el-option label="关联(pointer)" value="pointer"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="form.type == 'pointer'" label="关联模型" size="small">
            <el-select v-model="form.pointer" placeholder="请选择关联模型"></el-select>
          </el-form-item>
          <el-divider>高级设置</el-divider>
          <el-form-item label="默认值" size="small">
            <el-input placeholder v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="读权限" size="small">
            <el-radio-group v-model="form.resource">
              <el-radio label="所有人"></el-radio>
              <el-radio label="登录用户"></el-radio>
              <el-radio label="用户组"></el-radio>
              <el-radio label="禁止访问"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="写权限" size="small">
            <el-radio-group v-model="form.resource">
              <el-radio label="所有人"></el-radio>
              <el-radio label="登录用户"></el-radio>
              <el-radio label="用户组"></el-radio>
              <el-radio label="禁止访问"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="其他">
            <el-checkbox-group v-model="form.other">
              <el-checkbox label="非空" name="notNull"></el-checkbox>
              <el-checkbox label="自增" name="autoIncrease"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ListTable from "./listTable";

export default {
  name: "module",
  components: {
    ListTable
  },
  data() {
    return {
      isShowAddModal: false,
      isShowAddRow: false,
      searchString: "",
      form: {
        name: "",
        other: [],
        type: ""
      }
    };
  },
  methods: {
    showAddModal() {
      this.isShowAddModal = true;
    },
    showAddRow() {
      this.isShowAddRow = true;
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
.module_list_con {
  margin-top: 20px;
}
.module_list_con .el-menu-item,
.el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
}
</style>


