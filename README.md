# xcom-cypress-cucumber-utilities-4js

Cypress/Cucumber Utilities for JavaScript

Utilties and tools for automated integration testing of applications with Cypress/Cucumber.  For example, common Cucumber step definitions to logon, and manipulate basic HTML form widgets.

(For instructions on how to setup a project for testing and creating the dependency to 'xcom-cypress-cucumber-utilities-4js', refer to the 'xcom-cypress-cucumber-sandbox' project. )

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
cypress/screenshots
cypress/videos

...
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
    "nonGlobalStepDefinitions": false
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



## Verify Project Setup

```
> npm run test
```
