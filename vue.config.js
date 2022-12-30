const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    index: {//写了参数就得写完，没写的就是按默认的
      // page 的入口
      entry: 'src/main.js',
    },
    
  },
  lintOnSave:false//关闭语法检查
}
