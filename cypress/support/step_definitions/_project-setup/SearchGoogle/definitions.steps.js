

const url = "https://google.com";

Given('I open a Google page', () => {
  cy.visit(url);
});


When('I enter {string} in the search box', (search) => {
  cy.get('input[name="q"]').type(search + '{enter}');
});


Then('I see {string} in the results', (results) => {
  cy.title().should('include', results);
});
