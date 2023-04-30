/// <reference types="cypress" />
describe('Error page', () => {
  it('should be shown', () => {
    cy.visit('/404/');
    cy.get('span').invoke('text').should('equal', '404');
  });
});
