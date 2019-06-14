<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 -->
<template>
  <div>
    <el-row type="flex" :gutter="20">
      <el-col :span="4">
        <div class="mini_side">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>所有模型</span>
              <el-button @click="showAddModal" style="float: right; padding: 3px 0" type="text">添加</el-button>
            </div>
            <div>
              <div style="padding:0 20px">
                <el-input size="medium" v-model="searchString" placeholder="搜索模型名称"></el-input>
              </div>
              <div class="module_list_con">
                <el-menu
                  :default-active="currentSelectedModuleName"
                  class="el-menu-vertical-demo"
                  @select="moduleSelected"
                >
                  <div v-for="module in moduleList" :key="module.name">
                    <el-menu-item :index="module.name">
                      <span slot="title">
                        <span>{{module.comment}}</span>
                        <span class="module_action_con">
                          <i
                            @click="editModule(module)"
                            class="el-icon-edit"
                            style="color:#409eff !important"
                          ></i>
                          <i
                            @click="deleteModule"
                            class="el-icon-delete"
                            style="color:#f56c6c !important"
                          ></i>
                        </span>
                      </span>
                      <span slot="index">{{module.name}}</span>
                    </el-menu-item>
                  </div>
                </el-menu>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="20">
        <div class>
          <el-card>
            <div slot="header" class="clearfix">
              <span>模型结构</span>
              <!-- <el-button style="float: right; padding: 3px 10px" type="text">预览接口</el-button>
              <el-button style="float: right; padding: 3px 10px" type="text">查询</el-button>-->
              <el-button
                @click="showAddRow"
                style="float: right; padding: 3px 10px"
                type="text"
              >添加字段</el-button>
              <div class="l_data_con" style="margin-top:20px;">
                <ListTable></ListTable>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- 添加模型 -->
    <el-dialog
      :title="addModuleMode == 'add' ? '添加模型' : '编辑模型'"
      :visible.sync="isShowAddModal"
      width="50%"
    >
      <div>
        <el-form ref="form" :model="module" label-width="70px" :inline="false">
          <el-form-item label="模型标识" size="small">
            <el-input placeholder="英文开头+英文、数字" v-model="module.name"></el-input>
          </el-form-item>
          <el-form-item label="备注" size="small">
            <el-input placeholder="该模型的备注" v-model="module.comment"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="createModule">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加字段 -->

    <el-dialog title="添加字段" :visible.sync="isShowAddRow" width="50%">
      <div>
        <el-form ref="form" :model="form" label-width="70px" :inline="false">
          <el-form-item label="字段名称" size="small">
            <el-input placeholder="小写字母开头，英文+数字" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="备注名称" size="small">
            <el-input placeholder="显示该字段的备注名称" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="字段类型" size="small">
            <el-select v-model="form.type" placeholder="请选择字段类型">
              <el-option label="短文本(String)" value="String"></el-option>
              <el-option label="富文本(Text)" value="Text"></el-option>
              <el-option label="数字(Number)" value="Number"></el-option>
              <el-option label="布尔(Boolean)" value="Boolean"></el-option>
              <el-option label="日期(Date)" value="Date"></el-option>
              <el-option label="密码(Password)" value="Password"></el-option>
              <el-option label="文件(Media)" value="Media"></el-option>
              <el-option label="关联(Pointer)" value="Pointer"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="form.type == 'Pointer'" label="关联模型" size="small">
            <el-select v-model="form.Pointer" placeholder="请选择关联模型"></el-select>
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
import request from "../../api/request";

export default {
  name: "module",
  components: {
    ListTable
  },
  data() {
    return {
      isShowAddModal: false,
      isShowAddRow: false,
      addModuleMode: "add",
      searchString: "",
      module: {
        name: "",
        comment: ""
      },
      moduleList: [],
      currentSelectedModuleName: "",
      form: {}
    };
  },
  mounted() {
    this.getModuleList();
  },
  methods: {
    showAddModal() {
      this.isShowAddModal = true;
      this.addModuleMode = "add";
      this.module.name = "";
      this.module.comment = "";
    },
    showAddRow() {
      this.isShowAddRow = true;
    },
    moduleSelected(name) {
      this.getColumnByName(name);
      this.currentSelectedModuleName = name;
    },
    getModuleList() {
      this.$axios.get("/module").then(res => {
        const firstName = res.data[0].name;
        this.moduleList = res.data;

        this.currentSelectedModuleName = firstName;
        this.getColumnByName(firstName);
      });
    },
    createModule() {
      if (this.addModuleMode == "add") {
        this.$axios.post("/module", this.module).then(res => {
          console.log(res);
          this.getModuleList();
          if (res.status == 201) {
            this.isShowAddModal = false;
            this.$message({
              message: "添加成功",
              type: "success"
            });
          }
        });
      }
      if (this.addModuleMode == "edit") {
        this.$axios
          .put("/module/" + this.targetName, {
            subName: this.module.name,
            comment: this.module.comment
          })
          .then(res => {
            console.log(res);
            this.getModuleList();
            // if (res.status == 201) {
            //   this.isShowAddModal = false;
            //   this.$message({
            //     message: "添加成功",
            //     type: "success"
            //   });
            // }
          });
      }
    },
    editModule(module) {
      this.isShowAddModal = true;
      this.addModuleMode = "edit";
      this.module.name = module.name;
      this.module.comment = module.comment;
      this.targetName = module.name;
    },

    deleteModule() {},
    getColumnByName(name) {}
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
.module_list_con {
  margin-top: 20px;
  height: 100vh;
  overflow-y: scroll;
}
.module_list_con .el-menu-item,
.el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
}
.module_action_con {
  display: block;
  position: absolute;
  right: 10px;
  top: 0;
  display: none;
}
.module_action_con i {
  font-size: 16px;
}
.el-menu-item:hover .module_action_con {
  display: block;
}
</style>
<style>
.mini_side .el-card__body {
  padding: 20px 0 !important;
}
</style>


