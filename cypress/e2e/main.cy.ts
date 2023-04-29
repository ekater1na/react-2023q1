/// <reference types="cypress" />

describe('Text box with max characters', () => {
  it('display the appropriate remaining character count', () => {
    cy.visit('/');
    cy.get('.app-container');
    cy.get('.main-page-wrapper');
  });
});
