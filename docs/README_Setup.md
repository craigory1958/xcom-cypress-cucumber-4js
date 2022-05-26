

# <sub>[Overview](README.md)</sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Setup](README_Setup.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>[Reference](README_Reference.md)</sub>

## Cypress/Cucumber Utilities for JavaScript (cc4js)

<br/>


# Workstation Setup

* If this is the first JavaScript/Node.js project ...
    * Install Node.js ...
    * Install Git ...

<br>

* If this is the first Visual Studio Code (VS Code) project ...
    * Install VS Code ...
    * install 'Cucumber (Gherkin) Full Support' extension ...

<br>

## Setup Project

* Clone Git repository ...

* Open terminal session in VS Code ...

* If this is the first Git project ...

```

> git config --global user.name "FIRST_NAME LAST_NAME"
> git config --global user.email "EMAIL@EXAMPLE.COM"

```

* Initialize/build project ...

```

> npm cache clear --force

> npm install

```


### Update cypress 

```

> npm install cypress

```


### Update cypress-cucumber-preprocessor 

```

> npm install cypress-cucumber-preprocessor

> copy .setup\getStepDefinitionsPaths.js node_modules\cypress-cucumber-preprocessor\lib

```


### Restore Protected Files 

```

> gpg --decrypt --passphrase ${{ secrets.GPG_PASSPHRASE }} --batch -o cypress.env.json .protected/cypress.env.json.gpg

> gpg --decrypt --passphrase ${{ secrets.GPG_PASSPHRASE }} --batch -o cypress/fixtures/search-google-csv.csv .protected/cypress/fixtures/search-google-vcsv.csv.gpg

```


## Verify Project Setup

```

> npm run test-setup

```
