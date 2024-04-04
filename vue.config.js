// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require('@vue/cli-service')
module.exports = 
  {
     
    devServer: {
      proxy: {
          '/API1/': {
            target: 'https://report-id.online/',
             ws: true,
              changeOrigin: true,
              "secure": false,
              logLevel: "debug",
              warnings: false,
              pathRewrite: { "^/API1": "" }
          },
          '/API2': {
              target: 'http://10.10.10.72:8080/',
              changeOrigin: true,
              pathRewrite: {
                  '^/API2': ''
              }
          },
          
      }
    },
    pwa: {
      name: 'Action P2H',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'dev/sw.js',
        // ...other Workbox options...
      }
    },
      productionSourceMap: false,
      //transpileDependencies: true,
      publicPath: process.env.NODE_ENV === 'production'
        ? '/action_tracking_p2h_he/'
        : '/' 
}
