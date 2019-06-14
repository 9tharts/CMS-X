(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca772af4"],{"29ac":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"mini_side"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("所有模型")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.showAddModal}},[e._v("添加")])],1),a("div",[a("div",{staticStyle:{padding:"0 20px"}},[a("el-input",{attrs:{size:"medium",placeholder:"搜索模型名称"},model:{value:e.searchString,callback:function(t){e.searchString=t},expression:"searchString"}})],1),a("div",{staticClass:"module_list_con"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.currentSelectedModuleName},on:{select:e.moduleSelected}},e._l(e.moduleList,function(t){return a("div",{key:t.name},[a("el-menu-item",{attrs:{index:t.name}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("span",[e._v(e._s(t.comment))]),a("span",{staticClass:"module_action_con"},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#409eff !important"},on:{click:function(a){return e.editModule(t)}}}),a("i",{staticClass:"el-icon-delete",staticStyle:{color:"#f56c6c !important"},on:{click:e.deleteModule}})])]),a("span",{attrs:{slot:"index"},slot:"index"},[e._v(e._s(t.name))])])],1)}),0)],1)])])],1)]),a("el-col",{attrs:{span:20}},[a("div",{},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("模型结构")]),a("el-button",{staticStyle:{float:"right",padding:"3px 10px"},attrs:{type:"text"},on:{click:e.showAddRow}},[e._v("添加字段")]),a("div",{staticClass:"l_data_con",staticStyle:{"margin-top":"20px"}},[a("ListTable")],1)],1)])],1)])],1),a("el-dialog",{attrs:{title:"add"==e.addModuleMode?"添加模型":"编辑模型",visible:e.isShowAddModal,width:"50%"},on:{"update:visible":function(t){e.isShowAddModal=t}}},[a("div",[a("el-form",{ref:"form",attrs:{model:e.module,"label-width":"70px",inline:!1}},[a("el-form-item",{attrs:{label:"模型标识",size:"small"}},[a("el-input",{attrs:{placeholder:"英文开头+英文、数字"},model:{value:e.module.name,callback:function(t){e.$set(e.module,"name",t)},expression:"module.name"}})],1),a("el-form-item",{attrs:{label:"备注",size:"small"}},[a("el-input",{attrs:{placeholder:"该模型的备注"},model:{value:e.module.comment,callback:function(t){e.$set(e.module,"comment",t)},expression:"module.comment"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.createModule}},[e._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"添加字段",visible:e.isShowAddRow,width:"50%"},on:{"update:visible":function(t){e.isShowAddRow=t}}},[a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"70px",inline:!1}},[a("el-form-item",{attrs:{label:"字段名称",size:"small"}},[a("el-input",{attrs:{placeholder:"小写字母开头，英文+数字"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"备注名称",size:"small"}},[a("el-input",{attrs:{placeholder:"显示该字段的备注名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"字段类型",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择字段类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-option",{attrs:{label:"短文本(String)",value:"String"}}),a("el-option",{attrs:{label:"富文本(Text)",value:"Text"}}),a("el-option",{attrs:{label:"数字(Number)",value:"Number"}}),a("el-option",{attrs:{label:"布尔(Boolean)",value:"Boolean"}}),a("el-option",{attrs:{label:"日期(Date)",value:"Date"}}),a("el-option",{attrs:{label:"密码(Password)",value:"Password"}}),a("el-option",{attrs:{label:"文件(Media)",value:"Media"}}),a("el-option",{attrs:{label:"关联(Pointer)",value:"Pointer"}})],1)],1),"Pointer"==e.form.type?a("el-form-item",{attrs:{label:"关联模型",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择关联模型"},model:{value:e.form.Pointer,callback:function(t){e.$set(e.form,"Pointer",t)},expression:"form.Pointer"}})],1):e._e(),a("el-divider",[e._v("高级设置")]),a("el-form-item",{attrs:{label:"默认值",size:"small"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"读权限",size:"small"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"所有人"}}),a("el-radio",{attrs:{label:"登录用户"}}),a("el-radio",{attrs:{label:"用户组"}}),a("el-radio",{attrs:{label:"禁止访问"}})],1)],1),a("el-form-item",{attrs:{label:"写权限",size:"small"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"所有人"}}),a("el-radio",{attrs:{label:"登录用户"}}),a("el-radio",{attrs:{label:"用户组"}}),a("el-radio",{attrs:{label:"禁止访问"}})],1)],1),a("el-form-item",{attrs:{label:"其他"}},[a("el-checkbox-group",{model:{value:e.form.other,callback:function(t){e.$set(e.form,"other",t)},expression:"form.other"}},[a("el-checkbox",{attrs:{label:"非空",name:"notNull"}}),a("el-checkbox",{attrs:{label:"自增",name:"autoIncrease"}})],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},o=[],r=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{fixed:"",prop:"type",label:"类型",width:"150","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return["String"==t.row.type?a("el-tag",{attrs:{width:"100px",type:""}},[e._v("String")]):e._e(),"Text"==t.row.type?a("el-tag",{attrs:{type:""}},[e._v("Text")]):e._e(),"Number"==t.row.type?a("el-tag",{attrs:{type:"success"}},[e._v("Number")]):e._e(),"Date"==t.row.type?a("el-tag",{attrs:{type:"info"}},[e._v("Date")]):e._e(),"Email"==t.row.type?a("el-tag",{attrs:{type:"warning"}},[e._v("Email")]):e._e(),"Media"==t.row.type?a("el-tag",{attrs:{type:"danger"}},[e._v("Media")]):e._e(),"Boolean"==t.row.type?a("el-tag",{attrs:{type:"danger"}},[e._v("Boolean")]):e._e(),"Password"==t.row.type?a("el-tag",{attrs:{type:"password"}},[e._v("Password")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"name",label:"字段名称",width:"120","render-header":e.renderHeader}}),a("el-table-column",{attrs:{prop:"descrition",label:"备注名称",width:"150","render-header":e.renderHeader}}),a("el-table-column",{attrs:{prop:"defaultValue",label:"默认值",width:"150","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[""==t.row.defaultValue?a("span",[e._v("-")]):a("span",[e._v(e._s(t.row.defaultValue))])]}}])}),a("el-table-column",{attrs:{prop:"read",label:"读权限",width:"120","render-header":e.renderHeader}}),a("el-table-column",{attrs:{prop:"write",label:"写权限",width:"120","render-header":e.renderHeader}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text"}},[e._v("删除")])]}}])})],1)],1)}),n=[],s=a("bd86"),i=Object(s["a"])({methods:{handleClick:function(e){console.log(e)}},data:function(){return{tableData:[{name:"title",type:"String",descrition:"标题",defaultValue:"0",read:"所有人",write:"登录用户",other:"自增"},{name:"text",type:"Text",descrition:"内容",defaultValue:"",read:"所有人",write:"登录用户",other:"自增"},{name:"count",type:"Number",descrition:"阅读量",defaultValue:"",read:"所有人",write:"登录用户",other:"自增"},{name:"date",type:"Date",descrition:"发布日期",defaultValue:"",read:"所有人",write:"登录用户",other:"自增"},{name:"email",type:"Email",descrition:"邮箱",defaultValue:"",read:"所有人",write:"登录用户",other:"自增"},{name:"image",type:"Media",descrition:"封面图",defaultValue:"",read:"所有人",write:"登录用户",other:"自增"},{name:"posted",type:"Boolean",descrition:"已发布",defaultValue:"否",read:"所有人",write:"登录用户",other:"自增"},{name:"password",type:"Password",descrition:"访问密码",defaultValue:"",read:"所有人",write:"登录用户",other:"自增"}]}}},"methods",{renderHeader:function(e,t){return console.log(t),console.log(t.label),e("span",{class:"l_table_th"},[e("span",{class:"key"},t.column.property),e("span",{class:"label"},[e("span",{},t.column.label),e("i",{class:"el-icon-edit edit_column"})])])}}),d=i,c=(a("f0c3"),a("2877")),u=Object(c["a"])(d,r,n,!1,null,null,null),m=u.exports,f=(a("bc3a"),a("a1bc"),{name:"module",components:{ListTable:m},data:function(){return{isShowAddModal:!1,isShowAddRow:!1,addModuleMode:"add",searchString:"",module:{name:"",comment:""},moduleList:[],currentSelectedModuleName:"",form:{}}},mounted:function(){this.getModuleList()},methods:{showAddModal:function(){this.isShowAddModal=!0,this.addModuleMode="add",this.module.name="",this.module.comment=""},showAddRow:function(){this.isShowAddRow=!0},moduleSelected:function(e){this.getColumnByName(e),this.currentSelectedModuleName=e},getModuleList:function(){var e=this;this.$axios.get("/module").then(function(t){var a=t.data[0].name;e.moduleList=t.data,e.currentSelectedModuleName=a,e.getColumnByName(a)})},createModule:function(){var e=this;"add"==this.addModuleMode&&this.$axios.post("/module",this.module).then(function(t){console.log(t),e.getModuleList(),201==t.status&&(e.isShowAddModal=!1,e.$message({message:"添加成功",type:"success"}))}),"edit"==this.addModuleMode&&this.$axios.put("/module/"+this.targetName,{subName:this.module.name,comment:this.module.comment}).then(function(t){console.log(t),e.getModuleList()})},editModule:function(e){this.isShowAddModal=!0,this.addModuleMode="edit",this.module.name=e.name,this.module.comment=e.comment,this.targetName=e.name},deleteModule:function(){},getColumnByName:function(e){}}}),p=f,b=(a("7b68"),a("4dc9"),Object(c["a"])(p,l,o,!1,null,"0b1741d8",null));t["default"]=b.exports},"454f":function(e,t,a){a("46a7");var l=a("584a").Object;e.exports=function(e,t,a){return l.defineProperty(e,t,a)}},"46a7":function(e,t,a){var l=a("63b6");l(l.S+l.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"4dc9":function(e,t,a){"use strict";var l=a("bd6e"),o=a.n(l);o.a},"618b":function(e,t,a){},"7b68":function(e,t,a){"use strict";var l=a("a8f5"),o=a.n(l);o.a},"7f7f":function(e,t,a){var l=a("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in o||a("9e1e")&&l(o,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},"85f2":function(e,t,a){e.exports=a("454f")},a8f5:function(e,t,a){},bd6e:function(e,t,a){},bd86:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a("85f2"),o=a.n(l);function r(e,t,a){return t in e?o()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},f0c3:function(e,t,a){"use strict";var l=a("618b"),o=a.n(l);o.a}}]);
//# sourceMappingURL=chunk-ca772af4.8b75e13c.js.map