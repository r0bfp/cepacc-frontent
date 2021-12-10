const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 
                            "@primary-color": "rgb(1, 70, 140)"
                        },
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ]
}