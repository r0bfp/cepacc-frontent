const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 
                            "@primary-color": "#1A4E87"
                        },
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ]
}