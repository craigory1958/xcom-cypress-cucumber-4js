

When('the user clicks the {string} link', (link) => {
    clickLink(link);
});


And('the user clicks the {string} link', (link) => {
    clickLink(link);
});


function clickLink(link) {
    cy.get(link).click();
};
