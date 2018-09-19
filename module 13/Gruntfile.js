module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      tests: {
        configFile: './wdio.cucumber.conf'
      },
    },
    exec: {
      createHtmlReport: {
        command: 'npm run allure-report',
        stdout: false,
        stderr: false,
      },
    },
    clean: {
      allureResults: ['./test/reports/allure-results/*'],
      errorShots: ['./errorShots/*'],
      jsonResults: ['./test/reports/json-results/*']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-continue');

  grunt.registerTask('default', [
    'clean:allureResults',
    'clean:errorShots',
    'clean:jsonResults',
    'continue:on',
    'webdriver:tests',
    'exec:createHtmlReport'
  ]);
};
