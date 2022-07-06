

## <sub>[Overview](README.md)</sub> &nbsp;&nbsp; <sub>[Setup](README_Setup.md)</sub> &nbsp;&nbsp; [Reference](README_Reference.md)

### <sub>[Summary](README_Reference.md)</sub> &nbsp;&nbsp; <sub>[Cucumber/Gherkin](README_Reference_Cucumber.md)</sub> &nbsp;&nbsp; [Webflows](README_Reference_Webflows.md)

---

## Cypress/Cucumber for JavaScript (cc4js)

<br/>

# Webflows

Webflows are Excel workbooks that dynamically drive end-to-end web-app testing.  

Tests are encoded using simple conventions.  For example, a properly encoded test could consist of a single worksheet.
The first row of the worksheet contains Web Widget IDs (or headers) identifying where data is to be injected the web-app.
The header row may also contain pseudo-IDs controlling for submission and other activities.
Subsequent rows represent datasets of individual end-to-end tests.

| First Name | Last Name | .FormAction | 
| --- | --- | --- |
| John | Doe | Submit | 
| Jane | Smith | Submit | 

Note that Webflow headers refer to Web Widget IDs; not directly to web-app fields.
To help future proof the tests, a Web Widget Catalog is maintained that maps IDs to physical HTML fields.
Should the physical attributes of a filed change, only one entry in the catalog needs updating.

| Form | ID | Type | xPath |
| --- | --- | --- | ---|
| Legal Name | First Name | Textbox | input[name="firstname"] | 
| Legal Name | Last Name | Textbox | input[name="lastname"] | 

<br/>

## Webflow Syntax

---

