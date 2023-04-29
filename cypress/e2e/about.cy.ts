/// <reference types="cypress" />
describe('Heading text', () => {
  it('contains the correct title', () => {
    cy.visit('/about/');
    cy.get('span').invoke('text').should('equal', 'About');
  });
});
