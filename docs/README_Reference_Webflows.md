

## [_Overview_](README.md) &nbsp;&nbsp; [_Setup_](README_Setup.md) c&nbsp; [**Reference**](README_Reference.md)

### [_Summary_](README_Reference.md) &nbsp;&nbsp; [_Cucumber/Gherkin_](README_Reference_Cucumber.md) &nbsp;&nbsp; [**Webflows**](README_Reference_Webflows.md)

---

## Cypress/Cucumber for JavaScript (cc4js)


<br/>

# Webflows

Webflows are Excel workbooks (spreadsheet) that dynamically drive end-to-end web-app testing.  

Tests are encoded in Excel using very simple set of conventions.  For example, a properly encoded test could consist of just a single worksheet containing 2 rows.
The first row, column headings, contain Web Widget IDs identifying where data is to be injected the web-app.
Column headings may also contain pseudo-IDs controlling form submission and other web-app directives.
Subsequent rows represent datasets of individual end-to-end tests.

<br/>

## Webflow Conventions

* A Webflow is an Excel workbook containing at least one worksheet.

* Each worksheet is identified by a unique Web Form ID.

* Each worksheet contains a mandatory header row (row 1).

* Column headings consists of Web Widget IDs or pre-defined pseudo-IDs.  Pseudo-IDs begin with a special character, such as a period ('.').

<br/>

> Below, is a representation of a Webflow.  It consists of an Excel workbook (spreadsheet) contanining 2 worksheets: _Legal Name_ and _Contact Info_.  The Webflow describes a web-app with 2 forms.
The first form, _Legal Name_, contains the fields _First Name_ and _Last Name_, and a _Next_ button.
The second form, _Contact Info_, contains the fields _Phone Number_ and _Email Address_, and a _Submit_ button.

<br/>

| First Name | Last Name | .FormAction | 
| --- | --- | --- |
| John | Doe | Next | 
| Jane | Smith | Next |

&nbsp;&nbsp; **-Legal Name-** &nbsp;&nbsp; -Contact Info-

<br/>

| Phone Number | Email Address | .FormAction | 
| --- | --- | --- |
| 123-123-1234 | me@them.com | Submit | 
|  | me2@them.com | Submit | 

&nbsp;&nbsp; -Legal Name- &nbsp;&nbsp; **-Contact Info-**

<br/>

> Note that Web Form IDs and Web Widget IDs should be simple business domain names; easy for the test writer to remember and implicitly understand.

<br/>

### Flow

A flow (or dataset or end-to-end test) progresses in the following manor:

*	A flow begins with the cell in the first column of the first data row (row 2) of the first worksheet.

*	Data from the cell is either injected into the web-app or an action is taken based on the cell’s value and corresponding column heading.

*	The flow progresses with the next column of the current row and worksheet until all columns are processed.

*	Once all columns in the current row and worksheet are exhausted, flow continues with the data cell in the first column of the current row of the next worksheet.

*	Once all worksheets are exhausted, the flow is complete and new floe begins with the cell in the first column of the next row of data of the first worksheet.

*	Once all rows are exhausted, progression stops.


<br/>

## Web Widget Catalog

The Web Widget Catalog maps logical Web Widget IDs to physical HTML fields.

| Form | ID | Type | xPath |
| --- | --- | --- | ---|
| Contact Info | Email Address | Textbox | input[name="email"] | 
| Contact Info | Phone Number | Textbox | input[name="phone"] | 
| Contact Info | Submit | Button | input[name="submit"] | 
| Legal Name | First Name | Textbox | input[name="firstname"] | 
| Legal Name | Last Name | Textbox | input[name="lastname"] | 
| Legal Name | Next | Button | input[name="next"] | 
| **-Widgets-** ||||

<br/>

> Tests are partially future proofed by the use of the Web Widget Catalog.
Column headings refer to Web Widget IDs, not directly to actual web-app fields.
Should the physical attributes of a field change, only one entry in the catalog needs updating; not every reference of the field in ever automated test.


<br/>

## Other Conventions

xxx


