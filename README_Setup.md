

| <h3>[Overview](README.md)</h3> | <h2>[Setup](README_Setup.md)</h2> | <h3>[Reference](README_Reference.md)</h3> |
|---|---|---|


# Workstation Setup

* If this is the first JavaScript/Node.js project ...
    * Install Node.js ...
    * Install Git ...

<br>

* If this is the first Visual Studio Code (VS Code) project ...
    * Install VS Code ...
    * install 'Cucumber (Gherkin) Full Support' extension ...

<br>

## Setup project

<br/>

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

* Edit **.gitignore** ...

```
...
# Cypress
cypress.env.json
cypress/screenshots
cypress/videos
...
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
    "nonGlobalStepDefinitions": false
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
