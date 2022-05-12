

| <h2>Overview</h2> | <h3>Setup</h3> | <h3>Reference</h3> |
|---|---|---|

# xcom-cypress-cucumber-utilities-4js

Cypress/Cucumber Utilities for JavaScript

Utilties and tools for automated integration testing of applications with Cypress/Cucumber.  For example, common Cucumber step definitions to logon, and manipulate basic HTML form widgets.
  Assumptions are that the appropriate GitHub repository and Cypress.io project have been created for the system under test.

(For instructions on how to setup a project testing for and creating the dependency to 'xcom-cypress-cucumber-utilities-4js', refer to the 'xcom-cypress-cucumber-sandbox' project. )

<br/>

---

# Setup workstation

* If this is the first JavaScript/Node.js project ...
    * Install Node.js ...
    * Install Git ...

<br>

* If this is the first Visual Studio Code (VS Code) project ...
    * Install VS Code ...
    * install 'Cucumber (Gherkin) Full Support' extension ...


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

* Edit **.gitignore** ...

```
...
# Cypress
cypress.env.json
cypress/screenshots
cypress/videos
...
```


## Setup Cypress

```
> npm install --save-dev cypress
```

* Edit **package.json** ...

```json
...
"scripts": {
    "cypress": "cypress open",
    "test-setup": "cypress run --spec cypress/integration/_project-setup/**",
    "test": "cypress run --spec cypress/integration/[abcdefghijklmnopqrstuvwxyz0123456789]*/**"
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


* Edit **.cypress-cucumber-preprocessorrc.json** ...

```json
...
{
    "cypress-cucumber-preprocessor": {
        "nonGlobalStepDefinitions": false
    }
}
...
```

* Edit **cypress.json** ...

```json
...
"testFiles": [
    "**/*.{feature,features}",
    "**/*.spec.{js,ts}"
]
...
```

* Edit cypress/plugins/**index.js** ...

```js
...
/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
}
...
```


## Setup Cypress.io Dashboard

* Edit **cypress.json** ...

```json
...
"projectId": "CYPRESS_DASHBOARD_PROJECT_ID",
...
```

* Edit **package.json** ...

```json
...
"scripts": {
    ...
    "test-record": "cypress run --record --key CYPRESS_DASHBOARD_KEY --spec cypress/integration/[abcdefghijklmnopqrstuvwxyz0123456789]*/**"
    ...
}
...
```



## Verify Project Setup

```
> npm run test-setup
```
