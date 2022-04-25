

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


When('the user enters {string} into the {string} field', (value, field) => {
    entersFieldData(field, value);
});

And('the user enters {string} into the {string} field', (value, field) => {
    entersFieldData(field, value);
});

function entersFieldData(field, value) {
    cy.get(field).type(value);
    return;
}