# 后台管理系统 （一）

1. element-ui 使用
2. axios 使用
  
## 初始化 
```
vue ui
npm run serve
cnpm install less less-loader
cnpm install element-ui
cnpm install axios
```


## package.json

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

## babel.config.js
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