Feature: Mixin scenario

  Scenario: 01 User can login to system
    Given I login to Portal via "saml-idp"
    Then I expect to be on [Home] page

  Scenario: 02 User checks page title
    When I click "My Account" - "Manage Attributes" submenu item in [Menu Bar]
    Then I expect to be on [Manage Attributes] page
    When I click "Add Attribute" button
    Then I expect to be on [New Attribute] page
    And I expect page title to be "New Attribute"