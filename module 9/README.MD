The framework was created based on https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD.

How to install project and execute the tests:
1. Copy creds.js file to /test folder.
2. Run on command line: npm install.
3. Run on separate command line saml-idp project in order to have access to login page that will be used by the tests.
4. Run grunt to start executing scripts:
  - To run Mixin scenario: open 'wdio.cucumber.conf.js' file, update 'specs' parameter to './test/features/Mixin*.feature' and run 'grunt' command
  - To run Factory 1 scenario: open 'wdio.cucumber.conf.js' file, update 'specs' parameter to './test/features/Okta*.feature' and run 'grunt' command
  - To run Factory 2 scenario: open 'wdio.cucumber.conf.js' file, update 'specs' parameter to './test/features/Okta*.feature' and run 'grunt' command

9th Module description:
A) Mixin
1. Added new feature file 'Mixin sceanrio' which use steps with Mixin use.
2. The step is from new.attributes.page.steps.js and uses method 'getPageTitle()' inherited by newAttributes class from Mixin.
B) Factory
1. Added loginFactory with implemented cases of 'sam-idp' and 'okta' logins.
2. Both logins are used in the tests.