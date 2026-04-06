Feature: Login

  @regression
  Scenario Outline: Login with "<type>" credentials
    Given the user is on the homepage
    When the user opens login modal
    And the user logs in with username "<username>" and password "<password>"
    Then the login result should be "<message>"

Examples:
  | type                        | username   | password | message                               |
  | valid                       | tun        | admin    | Welcome tun                           |
  | empty username              |            | admin    | Please fill out Username and Password |
  | empty password              | tun        |          | Please fill out Username and Password |
  | empty username and password |            |          | Please fill out Username and Password |
  | invalid username            | sdhf1@434  | admin    | User does not exist.                  |
  | invalid password            | tun        | wrong    | Wrong password.                       |
