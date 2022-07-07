

## [_Overview_](README.md)&nbsp;&nbsp;[**Setup**](README_Setup.md)&nbsp;&nbsp;[_Reference_](README_Reference.md)

---

## Cypress/Cucumber for JavaScript (cc4js)

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

* Also needed if this is the first project ...
    * GnuPG ...

<br>


## Project Setup

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


### Hack cypress-cucumber-preprocessor 

```

> copy .setup\getStepDefinitionsPaths.js node_modules\cypress-cucumber-preprocessor\lib

```


## Decrypt .protected files 

```

> gpg --decrypt --passphrase GPG_PASSPHRASE --batch -o cypress.env.json .protected\.protected\cypress.env.json.gpg

> gpg --decrypt --passphrase GPG_PASSPHRASE --batch -o cypress\fixtures\search-google-csv.csv .protected\.protected\cypress\fixtures\search-google-vcsv.csv.gpg

```


## Setup and run project verification tests (optional) 

```

> npm run test-setup

```
