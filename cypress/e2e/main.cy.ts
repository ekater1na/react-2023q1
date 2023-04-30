/// <reference types="cypress" />

describe('Main pages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('display header', () => {
    cy.get('button').should('include.text', 'Search');
    cy.get('.header-container').should('include.text', 'Main').click();
    cy.get('li:nth-child(4)').should('include.text', '404').click();
    cy.get('span').should('contain', '404');
  });

  it('display search-bar', () => {
    cy.get('.header-container').should('include.text', 'Main');
    cy.get('.search-bar-wrapper').should('be.visible');
    cy.get('.options-bar-container').should('be.visible');
    cy.get('.options-bar-container').should('contain', 'Total pages');
  });

  it("doesn't display cards", () => {
    cy.get('.app-container');
    cy.get('.cards').should('have.length', 1);
    cy.get('.card').should('have.length', 0);
  });

  it(
    'display cards',
    {
      defaultCommandTimeout: 10000,
    },
    () => {
      cy.get('.search-bar-input').type(' ');
      cy.get('form').submit();

      cy.get('.cards').should('have.length', 1);
      cy.get('.card').should('have.length', 20);
    }
  );

  it('display cards with params', () => {
    cy.get('.search-bar-input').type(' ').click();
    cy.get('.options-bar-input').type('10').click();
    cy.get('.options-bar-select').select('latest');

    cy.get('.cards').should('have.length', 1);
    cy.get('.card').should('have.length', 30);
  });
});
