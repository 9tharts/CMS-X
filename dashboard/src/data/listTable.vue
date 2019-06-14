<!--
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 -->
<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        sortable
        fixed
        prop="date"
        label="日期"
        width="150"
        :render-header="renderHeader"
      >date</el-table-column>
      <el-table-column sortable prop="name" label="姓名" width="120" :render-header="renderHeader"></el-table-column>
      <el-table-column
        sortable
        prop="province"
        label="省份"
        width="120"
        :render-header="renderHeader"
      ></el-table-column>
      <el-table-column prop="city" label="市区" width="120" :render-header="renderHeader"></el-table-column>
      <el-table-column prop="address" label="地址" width="300" :render-header="renderHeader"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120" :render-header="renderHeader"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="l_flex mt20" style="justify-content: space-between;">
      <el-pagination background layout="prev, pager, next" :total="1000" style="margin-left:auto"></el-pagination>
    </div>
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
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
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
          h("span", { class: "label" }, params.column.label)
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
</style>


