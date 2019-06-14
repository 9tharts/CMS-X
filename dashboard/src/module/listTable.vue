<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 -->
<template>
  <div class="column_table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column fixed prop="type" label="类型" width="150" :render-header="renderHeader">
        <template slot-scope="scope">
          <el-tag width="100px" v-if="scope.row.type == 'String'" type>String</el-tag>
          <el-tag v-if="scope.row.type == 'Text'" type>Text</el-tag>
          <el-tag v-if="scope.row.type == 'Number'" type="success">Number</el-tag>
          <el-tag v-if="scope.row.type == 'Date'" type="info">Date</el-tag>
          <el-tag v-if="scope.row.type == 'Email'" type="warning">Email</el-tag>
          <el-tag v-if="scope.row.type == 'Media'" type="danger">Media</el-tag>
          <el-tag v-if="scope.row.type == 'Boolean'" type="danger">Boolean</el-tag>
          <el-tag v-if="scope.row.type == 'Password'" type="password">Password</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="字段名称" width="120" :render-header="renderHeader"></el-table-column>
      <el-table-column prop="descrition" label="备注名称" width="150" :render-header="renderHeader"></el-table-column>
      <el-table-column prop="defaultValue" label="默认值" width="150" :render-header="renderHeader">
        <template slot-scope="scope">
          <span v-if="scope.row.defaultValue == ''">-</span>
          <span v-else>{{scope.row.defaultValue}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="read" label="读权限" width="120" :render-header="renderHeader"></el-table-column>
      <el-table-column prop="write" label="写权限" width="120" :render-header="renderHeader"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="medium">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          name: "title",
          type: "String",
          descrition: "标题",
          defaultValue: "0",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "text",
          type: "Text",
          descrition: "内容",
          defaultValue: "",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "count",
          type: "Number",
          descrition: "阅读量",
          defaultValue: "",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "date",
          type: "Date",
          descrition: "发布日期",
          defaultValue: "",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "email",
          type: "Email",
          descrition: "邮箱",
          defaultValue: "",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "image",
          type: "Media",
          descrition: "封面图",
          defaultValue: "",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "posted",
          type: "Boolean",
          descrition: "已发布",
          defaultValue: "否",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        },
        {
          name: "password",
          type: "Password",
          descrition: "访问密码",
          defaultValue: "",
          read: "所有人",
          write: "登录用户",
          other: "自增"
        }
      ]
    };
  },

  methods: {
    renderHeader(h, params) {
      console.log(params);
      console.log(params.label);

      return h(
        "span",
        {
          class: "l_table_th"
        },
        [
          h("span", { class: "key" }, params.column.property),
          h("span", { class: "label" }, [
            h("span", {}, params.column.label),
            h("i", {
              class: "el-icon-edit edit_column"
            })
          ])
        ]
      );
    }
  }
};
</script>

<style>
.l_table_th {
  /* width: 100px; */
  display: inline-block;
}
.l_table_th .key,
.l_table_th .lable {
  display: block;
}
.l_table_th .key {
  font-size: 16px;
  color: #3f536e;
}
.column_table .el-tag {
  min-width: 80px !important;
  text-align: center;
}
.edit_column {
  /* display: none; */
  cursor: pointer;
  width: 30px;
  text-align: center;
  color: #409eff;
}
.column_table .cell:hover .edit_column {
  display: inline-block;
}
</style>


