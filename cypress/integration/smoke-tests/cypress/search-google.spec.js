

describe('Cypress Verification Test', () => {

    it('load Google`s search page', () => {
        cy.visit('https://www.google.com');
    });


    it('search for `Florida MMIS`', () => {
        cy.get('input[name="q"]').type('Florida MMIS{enter}');
    });


    it('check results', () => {
        cy.title().should('include', 'Florida MMIS');
    });
});