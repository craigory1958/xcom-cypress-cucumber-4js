

cy.DynamicData = {

    fetchDynamicValue: (value, data) => {

        const matched = /\${(.*)}/g.exec(value);
        
        return (matched ? eval("data." + matched[1]) : value);
    }
}
