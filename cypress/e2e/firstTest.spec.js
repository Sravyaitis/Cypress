/// <reference types='cypress'/>

describe('First test suite', () => {
    
    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by tag name
        cy.get('input')

        //by id
        cy.get('#inputEmail1')

        //by class value
        cy.get('.input-full-width')

        //by attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeholder="Email"]')

        //by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag, atttributes, id and class
        cy.get('input[fullwidth]#inputEmail1[placeholder="Email"].input-full-width')

        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')
    })

    it.only('second test',() => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    
    //get() -find elements on web page by locator globally
    //find() -find child elements by locator
    //contains() -find HTML text and by text and locator

    cy.contains('Sign in')
    cy.contains('[status="warning"]','Sign in')
    cy.contains('nb-card','Horizontal form').find('button')
    cy.contains('nb-card','Horizontal form').contains('Sign in')
    cy.contains('nb-card','Horizontal form').get('button')

    //cypress chains and DOM
    cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain','Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()
    
    })
})
