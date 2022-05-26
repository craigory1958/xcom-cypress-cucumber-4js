

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */


const cucumber = require('cypress-cucumber-preprocessor').default;

const cc4js = require('./cc4js-plugins.js')


module.exports = (on, config) => {

    on('file:preprocessor', cucumber());

    config = cc4js.plugins(on, config);

    return config;
}
