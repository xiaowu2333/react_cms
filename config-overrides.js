/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 01:50:24
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-06 22:04:00
 */
const {
   override,
   fixBabelImports,
   addLessLoader,
   addWebpackAlias,
   addDecoratorsLegacy
} =
require('customize-cra');
// const {
//    resolve
// } = require("path");
module.exports = override(
   addDecoratorsLegacy(),
   fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: "css",
   }),

);