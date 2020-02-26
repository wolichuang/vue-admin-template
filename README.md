# 后台管理系统 （儿）

1. element-ui 使用
2. axios 使用

-[ ] 登陆模块
-[ ] 主页

## 初始化 
```
vue ui
npm run serve
cnpm install less less-loader
cnpm install element-ui
cnpm install axios
```
### package.json
```js
{
  "name": "vue-admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.4.4",
    "element-ui": "^2.4.5",
    "vue": "^2.6.10",
    "vue-router": "^3.1.3",
    "vuex": "^3.1.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.1.0",
    "@vue/cli-plugin-eslint": "^4.1.0",
    "@vue/cli-service": "^4.1.0",
    "@vue/eslint-config-standard": "^4.0.0",
    "axios": "^0.19.0",
    "babel-eslint": "^10.0.3",
    "babel-plugin-component": "^1.1.1",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "vue-cli-plugin-element": "^1.0.1",
    "vue-template-compiler": "^2.6.10"
  }
}
```
### babel.config.js
```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}

```

## 登陆模块

1. 绝对定位
2. 阿里云图标引入
3. 表单验证
4. vscode 自动保存 eslint 验证
5. axios 配置 =》 async/await 调用接口
6. 登陆成功后 弹框提示
7. 配置代理服务
8. 路由守卫 - 过滤没有登陆的用户访问链接
9. 按需导入element-ui
10. git 操作 git checkout master / git merge dev / git push 
  
```css
.login-box{
   width: 430px;
   height: 300px;
   background: #fff;
   position: absolute;
   left:50%;
   top:50%;
   transform: translate(-50%,-50%);
 }
```

```json
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化 
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,

  //  #让prettier使用eslint的代码格式进行校验 
  "prettier.eslintIntegration": true,
  //  #去掉代码结尾的分号 
  "prettier.semi": false,
  //  #使用带引号替代双引号 
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择 
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化 
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.colorTheme": "Visual Studio Dark",
  "editor.fontSize": 15
}
```

```
const port = 8080 // dev port
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
    proxy: {
      '/api': {
        target: 'https://www.liulongbin.top:8888/',
        changeOrigin: true, // 是否改变域名
        ws: true
        // pathRewrite: {
        //   // 路径重写
        //   "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        // }
      }
    }
    // 下边这个， 如果你是本地自己mock 的话用after这个属性，线上环境一定要干掉
    // after: require("./mock/mock-server.js")
  }
}
```

## 主页模块

1. 添加axios请求拦截器,预处理请求头挂载 token

```js
axios.defaults.baseURL = 'api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
```

2. 处理请求菜单
3. 页面切换侧边栏改造,开启路由模式，通过 path 设置路由。
4. sessionStorage 保存路径值，切换高亮
5. 绘制表格，自定义插槽
```js
<el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state"
                       @change="userStateChanged(scope.row)">
            </el-switch>
          </template>
        </el-table-column>
 ```
 6. 分页
 ```js
 <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="queryInfo.pagenum"
                     :page-sizes="[1, 2, 5, 10]"
                     :page-size="queryInfo.pagesize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
```