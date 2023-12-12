// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress" />

///<reference types="cypress-xpath" />

import { should } from "chai";

Cypress.Commands.add('getIframe', (iframe) => {
  return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})
// Custom Command fot clicking on link using label

Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click();
})

Cypress.Commands.overwriteQuery(
  "contains",
  function (contains, filter, text, userOptions = {}) {

    // This is parameter resolution from Cypress v12.7.0 source
    if (Cypress._.isRegExp(text)) {
      // .contains(filter, text)
      // Do nothing
    } else if (Cypress._.isObject(text)) {
      // .contains(text, userOptions)
      userOptions = text
      text = filter
      filter = ''
    } else if (Cypress._.isUndefined(text)) {
      // .contains(text)
      text = filter
      filter = ''
    }

    userOptions.matchCase = false;

    let contains0 = contains.bind(this)    // this line fixes the error

    return contains0(filter, text, userOptions)
  })

Cypress.Commands.add("deleteUser", () => {
  cy.visit("https://automationexercise.com/login")
  cy.get('[data-qa="login-email"]').type('test@testit.li')
  cy.get('[data-qa="login-password"]').type('Test123')
  cy.get('[data-qa="login-button"]').click()
  cy.wait(3000)
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  cy.wait(3000)
  cy.get('b').should('have.text', 'Account Deleted!')
})

Cypress.Commands.add("createUser", () => {
  cy.visit("https://automationexercise.com/login")
  cy.get('[data-qa="signup-name"]').type('Tester')
  cy.get('[data-qa="signup-email"]').type('test@testit.li')
  cy.get('[data-qa="signup-button"]').click()
  cy.wait(3000)
  cy.get('[data-qa="password"]').type('Test123')
  cy.get('[data-qa="first_name"]').type('Tester')
  cy.get('[data-qa="last_name"]').type('Testowy')
  cy.get('[data-qa="address"]').type('Newcrest')
  cy.get('#country').select('Canada', { forced: true }).should('have.value', 'Canada')
  cy.get('[data-qa="state"]').type('Evergreen Harbor')
  cy.wait(3000)
  cy.get('[data-qa="city"]').type('Batuu')
  cy.get('[data-qa="zipcode"]').type('12-123')
  cy.get('[data-qa="mobile_number"]').type('123456789')
  cy.get('[data-qa="create-account"]').click()
  cy.get('[data-qa="continue-button"]').click()
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
})

