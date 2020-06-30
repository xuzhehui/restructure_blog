module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5590', 
            ws: true, // proxy websockets
            changeOrigin: true,
            pathRewrite: {
              '^/api': '' // rewrite path
            }
          }
        } 
    },
    lintOnSave: false//禁用eslint
}