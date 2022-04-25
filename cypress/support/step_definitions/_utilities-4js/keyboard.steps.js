

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


When('the user presses the {string} key', (key) => {
    keyPress(key);
});

And('the user presses the {string} key', (key) => {
    keyPress(key);
});

function keyPress(key) {
    cy.focused().type('{' + key + '}');
    return;
};
