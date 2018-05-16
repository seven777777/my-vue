/*
 * @Author: seven.zhang 
 * @Date: 2018-05-16 09:47:47 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-16 09:56:41
 */

/*
 * 描述了开发和构建两种环境下的配置
 */
 'use strict'
const path = require('path')

module.exports = {
  // 开发过程中使用的配置
  dev: {
    // 静态资源文件夹
    assetsSubDirectory: 'static',
    // 发布路径
    assetsPublicPath: '/',
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    // 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
    proxyTable: {},

    // 各种Dev服务器设置
    host: 'localhost', // 可以被process.env.HOST覆盖
    port: 8080, // dev-server监听的端口
    autoOpenBrowser: false,// 是否自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, 

    
    /**
     * Source Maps
     */

    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    // 是否开启 cssSourceMap
    cssSourceMap: true
  },

  // 构建产品时使用的配置
  build: {
    // html入口文件
    index: path.resolve(__dirname, '../dist/index.html'),

    // 产品文件的存放路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 二级目录，存放静态资源文件的目录，位于dist文件夹下
    assetsSubDirectory: 'static',
    // 发布路径，如果构建后的产品文件有用于发布CDN或者放到其他域名的服务器，可以在这里进行设置
    // 设置之后构建的产品文件在注入到index.html中的时候就会带上这里的发布路径
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

     // 是否使用source-map
    productionSourceMap: true,
    devtool: '#source-map',

    // 是否开启gzip压缩
    productionGzip: false,
    // gzip模式下需要压缩的文件的扩展名，设置js、css之后就只会对js和css文件进行压缩
    productionGzipExtensions: ['js', 'css'],

    // 是否展示webpack构建打包之后的分析报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
