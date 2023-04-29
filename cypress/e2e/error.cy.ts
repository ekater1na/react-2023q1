/// <reference types="cypress" />
describe('Heading text', () => {
  it('contains the correct title', () => {
    cy.visit('/404/');
    cy.get('span').invoke('text').should('equal', '404');
  });
});
