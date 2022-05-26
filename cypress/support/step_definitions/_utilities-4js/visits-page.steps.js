

Given('the user navagates to {string}', url => {

    cy.visit(cy.DynamicData.fetchDynamicValue(url, Cypress.env('TEST_CONFIGURATION')));
});


Then('the user sees the {string} page', title => {

    cy.title().should('include', cy.DynamicData.fetchDynamicValue(title, Cypress.env('TEST_CONFIGURATION')));
});


Then('the user sees {string} on the page', value => {

    cy.contains(cy.DynamicData.fetchDynamicValue(value, Cypress.env('TEST_CONFIGURATION')));
});
