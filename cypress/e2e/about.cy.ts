/// <reference types="cypress" />
describe('About page', () => {
  it('should be shown', () => {
    cy.visit('/about/');
    cy.get('span').invoke('text').should('equal', 'About');
  });
});
