

const { defineConfig } = require('cypress')


module.exports = defineConfig(
    {
        projectId: '3z5u9y',

        e2e: {
            specPattern: 'cypress/e2e/**/*.*',

            setupNodeEvents(on, config) {
                return require('./cypress/plugins/index.js')(on, config)
            },
        },
    }
);