/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 10:28:08
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-06 10:28:58
 */
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/api',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        }));
}