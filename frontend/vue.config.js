module.exports = {
    devServer : {
        proxy : {
            '/api':{
                target : 'http://localhost:3000/api',
                changeOrigin : true,
                pathRearite : {
                    '^/api': ""
                }
            }
        }
    },
    outputDir: '../backend/public',
}