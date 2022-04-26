

Feature: Cucumber/Gherkin Verification Test

  I want to open Google and search for 'swiss cheese'

  Scenario: Opening Google and searching
    Given I open a Google page
    When I enter 'swiss cheese' in the search box
    Then I see "swiss cheese" in the results
