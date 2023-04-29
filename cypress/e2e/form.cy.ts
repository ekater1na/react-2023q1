/// <reference types="cypress" />

describe('Text box with max characters', () => {
  it('display the appropriate remaining character count', () => {
    cy.visit('/forms');
    cy.get('form').find('input').first().should('have.attr', 'placeholder', 'First name');

    cy.get('form').find('input').first().type('hi');

    cy.get('form').find('input').first().should('have.value', 'hi');
  });
});
