/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 项目根目录中的主要ESLint配置文件
  root: true,

  // 引入对应插件可以使用社区推荐的格式化风格
  'extends': [
    'eslint:recommended',
  ],

  // 指定解析器，指定分析 js 的特定语法
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
