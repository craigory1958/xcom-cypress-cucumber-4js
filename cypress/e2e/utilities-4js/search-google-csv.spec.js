

describe('CSV Verification Test', () => {

    var csvData;


    before(() => {

        cy.readFile('cypress/fixtures/search-google-csv.csv')
            .then((csv) => {
                cy.task('CsvToJson', csv).then((json) => {
                    csvData = json;
                });
            });
    });


    it('process CSV data', () => {

        csvData.forEach(function (row) {
            cy.log(row['query']);

            cy.visit('https://www.google.com');
            cy.get('input[name="q"]').type(row['query'] + '{enter}');
            cy.title().should('include', row['results']);
        });
    });
});
