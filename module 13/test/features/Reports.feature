Feature:  Reporting, logs, highlight, screenshot

  Scenario: 01 User logins to the system
    Given I login to Portal
    Then I expect to be on [Home] page

  Scenario: 02 User opens 'New Attribute' page
    When I click "My Account" - "Manage Attributes" submenu item in [Menu Bar]
    Then I expect to be on [Manage Attributes] page
    When I click "Add Attribute" button
    Then I expect to be on [New Attribute] page

  Scenario: 03 User fills in Name field
    When I highlight "Create Button"
    When I enter "!Alex_mod8_autotest" value to "Name *" input
    Then I expect "!Alex_mod8_autotest" value is shown in "Name *" input
    Then I expect "Create" button is enabled