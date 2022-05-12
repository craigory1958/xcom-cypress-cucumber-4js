

When('the user presses the {string} key', (key) => {
    pressKey(key);
});


And('the user presses the {string} key', (key) => {
    pressKey(key);
});


function pressKey(key) {
    cy.focused().type(key);
};
