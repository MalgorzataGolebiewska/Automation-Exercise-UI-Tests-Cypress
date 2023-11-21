const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
      
    },
  },
});
