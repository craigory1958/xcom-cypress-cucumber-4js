

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */


const cucumber = require('cypress-cucumber-preprocessor').default;

const cc4js = require('../../node_modules/xcom-cypress-cucumber-utilities-4js/cypress/plugins/cc4js-plugins')


module.exports = (on, config) => {

    on('file:preprocessor', cucumber());

    config = cc4js.plugins(on, config);

    return config;
}
