

describe('Cypress Verification Test', () => {

    it('load Google`s search page', () => {
        cy.visit('https://www.google.com');
    });


    it('search for `swiss cheese`', () => {
        cy.get('input[name="q"]').type('swiss cheese{enter}');
    });


    it('check results', () => {
        cy.title().should('include', 'swiss cheese');
    });
});