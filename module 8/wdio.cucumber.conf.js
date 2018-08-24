const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

  specs: [
    './test/features/Create Attribute.feature',
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,

  capabilities: [

    {
      browserName: 'chrome',
      // platform: 'Windows 10',
      // version: '50.0',
      maxInstances: '5',
    },

  ],

  sync: true,
  logLevel: 'silent',     // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true,      // Enables colors for log output.
  screenshotPath: './test/reports/errorShots/',   // Saves a screenshot to a given path if a command fails.

  baseUrl: 'http://localhost:8080',
  waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 10000,    // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
  connectionRetryCount: 3,          // Default request retries count

  services: ['selenium-standalone'],

  framework: 'cucumber',
  reporters: ['spec', 'junit', 'allure', 'json'],

  reporterOptions: {
    junit: { outputDir: './test/reports/junit-results/' },
    json: { outputDir: './test/reports/json-results/' },
    allure: {
      outputDir: './test/reports/allure-results/',
      disableWebdriverStepsReporting: false,
      useCucumberStepReporter: false,
    },
  },

  cucumberOpts: {
    require: ['./test/stepDefinitions/*'],   // <string[]> (file/dir) require files before executing features
    backtrace: true,    // <boolean> show full backtrace for errors
    compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
    failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
    name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: false,    // <boolean> hide step definition snippets for pending steps
    source: false,      // <boolean> hide source uris
    profile: [],        // <string[]> (name) specify the profile to use
    strict: true,       // <boolean> fail if there are any undefined or pending steps
    tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
    timeout: defaultTimeoutInterval,    // <number> timeout for step definitions
    tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
    snippetSyntax: undefined,           // <string> specify a custom snippet syntax
  },

  before: function () {
    /**
     * Setup the Chai assertion framework
     */
    const chai = require('chai');
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },

  beforeScenario: (scenario) => {
    browser.windowHandleMaximize();
    process.send({
      event: 'scenario:start',
      name: scenario.name,
    });
    const featureNumber = scenario.feature.name.split(' ')[0];
    const scenarioNumber = scenario.name.split(' ')[0];
    browser.scenarioNumber = `${featureNumber}_${scenarioNumber}`;
  },
};
