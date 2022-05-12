

Given('the user navagates to {string}', url => {
    cy.visit(url);
});


Then('the user sees the {string} page', title => {
    cy.title().should('include', title);
});


Then('the user sees {string} on the page', value => {
    cy.contains(value);
});
