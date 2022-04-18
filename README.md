# xcom-cypress-cucumber-utilities-4js

Cypress/Cucumber Utilities for JavaScript

Utilties and tools for automated integration testing of applications with Cypress/Cucumber.  For example, common Cucumber step definitions to logon, and manipulate basic HTML form widgets.

This README.md describes how to setup a project to for testing and create the dependency to 'xcom-cypress-cucumber-utilities-4js'.  Assumptions are that the appropriate GitHub repository 
and Cypress.io project have been created for the system under test.

<br/>

---

# Setup workstation

* If this is the first JavaScript/Node.js project ...
* * Install Node.js ...
* * Install Git ...

<br>

* If this is the first Visual Studio Code (VS Code) project ...
* * Install VS Code ...
* * install 'Cucumber (Gherkin) Full Support' extension ...


## Setup project

* Clone Git repository ...

* Open terminal session in VS Code ...

* If first Git project ...

```
> git config --global user.name "FIRST_NAME LAST_NAME"
> git config --global user.email "EMAIL@EXAMPLE.COM"
```

* Initialize JavaScript project ...

```
> npm init --yes
```


## Setup Cypress

```
> npm install --save-dev cypress
```

* Edit **package.json** ...

```
...
"scripts": {
    "test": "cypress run",
    "cypress": "cypress open"
}
...
```

* Initialize Cypress ...
```
> npm run cypress
```

## Setup Cucumber/Gherkin

```
> npm install --save-dev cypress-cucumber-preprocessor
```

* Edit **cypress.json** ...

```
...
"testFiles": [
    "**/*.{feature,features}",
    "**/*.spec.{js,ts}"
]
...
```

* Edit **package.json** ...

```
...
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "step_definitions": "cypress/support/step_definitions"
}
...
```

* Edit cypress/plugins/**index.js** ...

```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
}
```


## Setup xcom-cypress-cucumber-common-4js Dependency

```
> npm install --save-dev https://github.com/GITHUB_USERNAME/xcom-cypress-cucumber-common-4js
```

* Edit **package.json** ...

```
...
"cypress-cucumber-preprocessor": {
    ...
    "nonGlobalStepBaseDir": "node_modules/xcom-cypress-cucumber-common-4js/cypress/support/step_definitions"
    ...
}
...
```


## Setup Cypress.io Dashboard

* Edit **package.json** ...

```
...
"scripts": {
    ...
    "test-record": "cypress run --record --key CYPRESS_DASHBOARD_KEY"
    ...
}
...
```

* Edit **cypress.json** ...

```
...
"projectId": "CYPRESS_DASHBOARD_PROJECT_ID",
...

```


## Verify Project Setup

```
> npm run test-record
```
