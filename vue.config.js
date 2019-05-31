const webpack = require('webpack');
module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:8888',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            },
            '/ms':{
                target: 'http://localhost:5000',
                changeOrigin: true,
            },
            '/test':{
                target: "http://10.231.132.130:8082",
                changeOrigin: true,
            }
        }
    }
};