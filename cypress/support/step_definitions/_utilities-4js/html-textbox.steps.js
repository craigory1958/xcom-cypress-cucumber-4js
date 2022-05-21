

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

    const matched = /\${(.*)}/g.exec(value);

    if (matched)
        value = eval("Cypress.env('TEST_CONFIGURATION')." + matched[1]);

    cy.get(field).type(value, { delay: delay });
}