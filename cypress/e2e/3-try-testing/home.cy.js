/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        // cy.visit('https://www.saucedemo.com/')
        cy.visit('https://example.cypress.io/todo')
    })

    it('displays homepage', () => {
        cy.get('.navbar-brand')
            .should('have.text', 'cypress.io')
        cy.get('.navbar').contains('Commands').should('exist')
        cy.get('.navbar').contains('Utilities').should('exist')
        cy.get('.navbar').contains('Cypress API').should('exist')
        cy.get('body h1')
            .should('have.text', 'todos')
    })
})