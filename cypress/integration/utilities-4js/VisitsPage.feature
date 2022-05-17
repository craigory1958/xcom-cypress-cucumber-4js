

Feature: Verify Visits Page

  I want to open Google and search for 'swiss cheese'

  Scenario: Opening Google and searching
    Given the user navagates to 'https://www.google.com/'
    When the user enters '${query}' into the 'input[title="Search"]' field
    And the user presses the '{enter}' key
    Then the user sees the '${query}' page
