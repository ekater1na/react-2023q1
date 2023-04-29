/// <reference types="cypress" />

describe('Main pages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('display header', () => {
    cy.get('.header-container').should('include.text', 'Main');
    cy.get('.header-container').should('include.text', 'Main').click();
  });
  it('display cards', () => {
    cy.get('.app-container');
    cy.get('.card').should('have.length', 0);
  });
});
