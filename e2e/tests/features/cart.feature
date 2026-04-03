Feature: Add product to cart

  Background:
    Given the user is on the homepage

  Scenario: Add a random product to cart
    When the user selects a random product
    And the user adds the product to cart
    And the user navigates to cart
    Then the cart should contain the selected product