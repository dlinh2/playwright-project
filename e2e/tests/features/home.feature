Feature: Home

  @smoke
  Scenario: View Home
    Given the user is on the homepage
    Then the user should see homepage content

  Scenario: View header logo and store name
    Given the user is on the homepage
    Then the user should see header logo and store name