

When('the user enters {string} into the {string} field', (value, field) => {
    enterFieldData(field, value, 10);
});

And('the user enters {string} into the {string} field', (value, field) => {
    enterFieldData(field, value, 10);
});


When('the user enters {string} into the {string} field slowly', (value, field) => {
    enterFieldData(field, value, 100);
});

And('the user enters {string} into the {string} field slowly', (value, field) => {
    enterFieldData(field, value, 100);
});


When('the user enters {string} into the {string} field very slowly', (value, field) => {
    enterFieldData(field, value, 1000);
});

And('the user enters {string} into the {string} field very slowly', (value, field) => {
    enterFieldData(field, value, 1000);
});


function enterFieldData(field, value, delay) {

    cy.get(field).type(cy.DynamicData.fetchDynamicValue(value, Cypress.env('TEST_CONFIGURATION')), { delay: delay });
}