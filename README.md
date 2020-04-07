# vue-preset-pc
Vue 项目模板pc端 preset

### Usage
```bash
vue create --preset Tracy-Chang/vue-preset-pc my-project
```

### Preset Config
* babel, router, vuex, CSS Pre-processors, Linter / Formatter, Unit Testing
* router mode: history
* Sass/SCSS (with dart-sass)
* eslint setup: ESLint + Standard config / Lint on save / Lint and fix on commit
* test: Mocha + Chai
* 配置文件放入新建文件中
* [preset.json](./preset.json)


### Features
* 集成`git-cz`规范提交message（中文提示信息），强制验证提交信息
* 集成`standard-version`自动生成changelog
* 预设三个 env 环境和三个 build scripts
* 使用`compression-webpack-plugin`进行资源 gzip 打包
* Service 层封装 axios
* 模块化 Vuex Store
* 集成 editorconfig, gitattributes, jsconfig.json 等对代码优化的功能配置