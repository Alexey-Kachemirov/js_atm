module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      tests: {
        configFile: './wdio.cucumber.conf'
      },
    },
    clean: {
      allureResults: ['./test/reports/allure-results/*'],
      errorShots: ['./test/reports/errorShots/*'],
      jsonResults: ['./test/reports/json-results/*'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.registerTask('default', [
    'clean:allureResults',
    'clean:errorShots',
    'clean:jsonResults',
    'webdriver:tests',
  ]);
};
