

describe('CSV Verification Test', () => {

    it('load CSV data', () => {

        cy.readFile('cypress/fixtures/search-google-csv.csv')
            .then((data) => {
                cy.task('csvToJson', data).then((rows) => {
                    rows.forEach(function (row) {

                        cy.visit('https://www.google.com');

                        cy.get('input[name="q"]').type(row['query'] + '{enter}');

                        cy.title().should('include', row['results']);
                    });
                })
            });
    });
});
