

Given('the user navagates to {string}', url => {

    cy.visit(cy.dynamicData.getDataValue(url, Cypress.env('TEST_CONFIGURATION')));
});


Then('the user sees the {string} page', title => {

    cy.title().should('include', cy.dynamicData.getDataValue(title, Cypress.env('TEST_CONFIGURATION')));
});


Then('the user sees {string} on the page', value => {

    cy.contains(cy.dynamicData.getDataValue(value, Cypress.env('TEST_CONFIGURATION')));
});
