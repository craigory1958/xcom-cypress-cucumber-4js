

## [Overview](README.md) &nbsp;&nbsp; [Setup](README_Setup.md) &nbsp;&nbsp; [**Reference**](README_Reference.md)

### [Summary](README_Reference.md) &nbsp;&nbsp; [Cucumber/Gherkin](README_Reference_Cucumber.md) &nbsp;&nbsp; [**Webflows**](README_Reference_Webflows.md)

---

## Cypress/Cucumber for JavaScript (cc4js)


<br/>

# Webflows

Webflows are Excel workbooks that dynamically drive end-to-end web-app testing.  

Tests are encoded in Excel using very simple conventions.  For example, a properly encoded test could consist of just a single worksheet containing 2 rows.
The first row of the worksheet (column headings) contains Web Widget IDs identifying where data is to be injected the web-app.
Column headings also contain pseudo-IDs controlling for submission and other activities.
Subsequent rows represent datasets of individual end-to-end tests.

| First Name | Last Name | .FormAction | 
| --- | --- | --- |
| John | Doe | Next | 
| Jane | Smith | Next | 
| **-Legal Name-** | -Contact Info- ||

<br/>

| Phone Number | Email Address | .FormAction | 
| --- | --- | --- |
| 123-123-1234 | me@them.com | Submit | 
|  | me2@them.com | Submit | 
| -Legal Name- | **-Contact Info-** ||


<br/>

## Webflow Conventions

* A Webflow is an Excel workbook containing at least one worksheet.


* Each worksheet is identified by a unique Web Form ID.

* Each worksheet contains a mandatory header row (row 1).

* Column headings consists of Web Widget IDs or pre-defined pseudo-IDs.  Pseudo-IDs begin with a special character, such as a period ('.').

>Note that Web Form IDs and Web Widget IDs are simple business domain names; easy for the test writer to remember and implicitly understand.

<br/>

### A Web Flow

A flow (or dataset or end-to-end test) progresses in the following manor:

*	A flow begins with the cell in the first column of the first row of data (row 2) of the first worksheet.

*	Data from the cell is either injected into the web-app or an action is taken based on the cell’s value and contains of the corresponding column heading.


*	The flow progresses with the next column of the current row and worksheet until all columns are processed.

*	Once all columns in the current row and worksheet are exhausted, flow continues with the data cell in the first column of the current row of the next worksheet.


*	Once all worksheets are exhausted, the flow is complete and starts over with the cell in the first column of the next row of data of the first worksheet.

*	Once all rows are exhausted, progression stops.


<br/>

## Web Widget Catalog

Webflow column headings refer to Web Widget IDs; not directly to web-app fields.
This helps future proof the tests.  The Web Widget Catalog is maintained to maps logical IDs to physical HTML fields.
Then, should the physical attributes of a field change, only one entry in the catalog needs updating.


| Form | ID | Type | xPath |
| --- | --- | --- | ---|
| Legal Name | First Name | Textbox | input[name="firstname"] | 
| Legal Name | Last Name | Textbox | input[name="lastname"] | 
| Legal Name | Next | Button | input[name="next"] | 
| Contact Info | Phone Number | Textbox | input[name="phone"] | 
| Contact Info | Email Address | Textbox | input[name="email"] | 
| Contact Info | Submit | Button | input[name="submit"] | 
| **-Widgets-** ||||


<br/>

## Other Conventions

xxx


