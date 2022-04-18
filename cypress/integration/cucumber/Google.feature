

Feature: Cucumber/Gherkin Verification Test

  I want to open Google page

  Scenario: Opening a Google network page
    Given I open a Google page
    When I enter 'Florida MMIS' in the search box
    Then I see "Florida MMIS" in the results
