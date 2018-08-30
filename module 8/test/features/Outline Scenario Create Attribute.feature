Feature:  Text attribute - Create, Delete (using Scenrio Outline)

  Scenario: 01 User logins to the system
    Given I login to Portal
    Then I expect to be on [Home] page

  Scenario: 02 User opens 'New Attribute' page
    When I click "My Account" - "Manage Attributes" submenu item in [Menu Bar]
    Then I expect to be on [Manage Attributes] page
    When I click "Add Attribute" button
    Then I expect to be on [New Attribute] page

  Scenario Outline: 03 User fills in Name field and checks Create button status
    When I enter <nameInput> value to "Name *" input
    Then I expect "Create" button is disabled
    Examples:
      | nameInput                                              |
      | "Create button is disabled"                            |
      | "And now it's still disabled"                          |
      | "It doesn't matter what to enter. It will be disabled" |
      | "!OK. I give up"                                       |

  Scenario Outline: 04 User fills in 'Description' field
    When I enter <descriptionInput> value to "Description" input
    Then I expect "Description Outline Test" value is shown in "Description" input
    Examples:
      | descriptionInput           |
      | "Description Outline Test" |

  Scenario: 05 User selects 'Text' value from [Attribute type] dropdown
    When I select "Text" value in "Attribute Type *" dropdown
    Then I expect "Text" value is selected in "Attribute Type *" dropdown

  Scenario Outline: 06 User selects different attribute types and checks Create button status
    When I select <attrType> value in "Attribute Type *" dropdown
    Then I expect "Create" button is disabled
    Examples:
      | attrType  |
      | "Number"  |
      | "List"    |
      | "Date"    |
      | "Country" |
      | "Text"    |

  Scenario Outline: 07 User checks 'Keyword Search' check box
    When I check <keyword> checkbox
    Then I expect "Keyword Search" checkbox to be checked
    Examples:
      | keyword          |
      | "Keyword Search" |

  Scenario: 08 User creates new attribute
    When I enter "!OK. I give up" value to "Name *" input
    Then I expect "Create" button is enabled
    And I click "Create" button
    Then I expect to be on [Manage Attributes] page
    And I expect "!OK. I give up" attribute is shown on [Manage Attributes] page
    When I wait "success" notification is not displayed

  Scenario: 09 User deletes an attribute
    When I click "bin" icon for "!OK. I give up" attribute on [Manage Attributes] page
    And I click "Yes" button
    Then I expect to be on [Manage Attributes] page
    And I expect "!OK. I give up" attribute is not shown on [Manage Attributes] page