

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('the user navagates to {string}', url => {
    cy.visit(url);
});


Then('the user sees the {string} page', title => {
    cy.title().should("include", title);
});

