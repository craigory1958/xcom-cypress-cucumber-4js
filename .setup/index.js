

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */


const cucumber = require('cypress-cucumber-preprocessor').default;

const ccu4js = require('./ccu4js-plugins.js')


module.exports = (on, config) => {

    on('file:preprocessor', cucumber());

    config = ccu4js.plugins(on, config);

    return config;
}
