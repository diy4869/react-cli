/*
 * @Author: last order
 * @Date: 2019-08-18 20:40:13
 * @LastEditTime: 2019-12-25 16:13:09
 */
/*
 * @Author: last order
 */
module.exports = {
  presets: [
    '@babel/env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true // `style: true` 会加载 less 文件
    }]
  ]
}
