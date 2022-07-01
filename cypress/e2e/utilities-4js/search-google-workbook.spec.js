

describe('Excel Verification Test', () => {

    var workbook;


    before('', () => {
        // cy.task('XLSX_readFile', 'cypress/fixtures/book1.xlsx').then((_workbook) => {
        cy.task('XLSX_readFile', 'cypress/fixtures/LicenseApplication_AthleticTraining_HappiestPaths.xlsx').then((_workbook) => {
            workbook = _workbook;
        });
    });


    it('Process Workbook data', () => {

        cy.log(workbook.SheetNames);

        //     workbook.forEach(function (row) {
        //         cy.log(row['query']);

        //         cy.visit('https://www.google.com');
        //         cy.get('input[name="q"]').type(row['query'] + '{enter}');
        //         cy.title().should('include', row['results']);
        //     });
    });
});
