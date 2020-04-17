# vue-cli2-admin

## 技术

## 是什么

## 为什么


## 安装

vue2.x  axios element-ui crud  http-server mysql 后端 

```bash
# 使用旧版（2.X）创建
npm install -g @vue/cli-init
# 'vue init'的运行效果与‘vue-cli@2.x’相同
vue init webpack vue-cli2-admin
```


## vue-router

```js
{   
    path: '/', 
    component: Home,
    name: "基本信息",
    iconCls: 'el-icon-message',
    children: [
      { path: '/basics/channel-manage-info', component: () => import('@/pages/basics/channel-manage-info.vue') , name: '渠道信息管理'},
      { path: '/basics/contract-manage', component: () => import('@/pages/basics/contract-manage.vue') , name: '收入合同管理'},
      { path: '/basics/school-manage', component: () => import('@/pages/basics/school-manage.vue'), name: '学校管理'}
    ]
 },
```
