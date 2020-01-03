/*
 * @Author: last order
 * @Date: 2019-08-18 20:40:13
 * @LastEditTime : 2019-12-21 16:07:47
 */
module.exports = {
  root: true,
  extends: ['standard', 'plugin:react/recommended'],
  env: {
    es6: true,
    node: true
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
  }
}
