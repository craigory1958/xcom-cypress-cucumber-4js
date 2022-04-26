

Feature: Cucumber/Gherkin Verification Test

  I want to open Google and search for 'Florida MMIS'

  Scenario: Opening Google and searching
    Given I open a Google page
    When I enter 'Florida MMIS' in the search box
    Then I see "Florida MMIS" in the results
