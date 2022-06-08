

const { defineConfig } = require('cypress')


module.exports = defineConfig(
    {
        projectId: 'CYPRESS_PROJECT_ID',

        e2e: {
            specPattern: 'cypress/e2e/**/*.*',

            setupNodeEvents(on, config) {
                return require('./cypress/plugins/index.js')(on, config)
            },
        },
    }
);