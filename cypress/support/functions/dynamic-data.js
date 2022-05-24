

cy.dynamicData = {
    getDataValue: (value, data) => {

        const matched = /\${(.*)}/g.exec(value);

        if (matched)
            value = eval("data." + matched[1]);

        return value;
    }
}