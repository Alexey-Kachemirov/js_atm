Feature:  Text attribute - Create, Delete

  Scenario: 01 User logins to the system via Okta
    Given I login to Portal via "okta"
    Then I expect to be on [Home] page

  Scenario: 02 User opens 'New Attribute' page
    When I click "My Account" - "Manage Attributes" submenu item in [Menu Bar]
    Then I expect to be on [Manage Attributes] page
    When I click "Add Attribute" button
    Then I expect to be on [New Attribute] page

  Scenario: 03 User fills in Name field
    When I enter "!Alex_mod9_autotest" value to "Name *" input
    Then I expect "!Alex_mod9_autotest" value is shown in "Name *" input
    Then I expect "Create" button is disabled

  Scenario: 04 User fills in 'Description' field
    When I enter "QAAuto Text Attribute Description" value to "Description" input
    Then I expect "QAAuto Text Attribute Description" value is shown in "Description" input

  Scenario: 05 User selects 'Text' value from [Attribute type] dropdown
    When I select "Text" value in "Attribute Type *" dropdown
    Then I expect "Text" value is selected in "Attribute Type *" dropdown

  Scenario: 06 User checks 'Keyword Search' check box
    When I check "Keyword Search" checkbox
    Then I expect "Keyword Search" checkbox to be checked

  Scenario: 07 User creates new attribute
    Then I expect "Create" button is enabled
    And I click "Create" button
    Then I expect to be on [Manage Attributes] page
    And I expect "!Alex_mod9_autotest" attribute is shown on [Manage Attributes] page
    When I wait "success" notification is not displayed

  Scenario: 08 User deletes an attribute
    When I click "bin" icon for "!Alex_mod9_autotest" attribute on [Manage Attributes] page
    And I click "Yes" button
    Then I expect to be on [Manage Attributes] page
    And I expect "!Alex_mod9_autotest" attribute is not shown on [Manage Attributes] page