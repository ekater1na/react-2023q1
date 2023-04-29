/// <reference types="cypress" />

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('should contain form', () => {
    cy.get('form').should('be.visible');
    cy.get("input[type='submit']");
  });

  it('should contain text input', () => {
    cy.get('form')
      .find("input[type='text']")
      .first()
      .should('have.attr', 'placeholder', 'First name');

    cy.get('form').find("input[type='text']").first().type('ann');

    cy.get('form').find("input[type='text']").first().should('have.value', 'ann');
  });

  it('should contain date input', () => {
    cy.get('form').find("input[type='date']").should('have.attr', 'placeholder', 'Birthday');

    cy.get('form').find("input[type='date']").type('2023-01-01');

    cy.get('form').find("input[type='date']").should('have.value', '2023-01-01');
  });

  it('should contain select', () => {
    cy.get('form').find('select').should('have.attr', 'placeholder', 'Country');

    cy.get('form').find('select').select('Belarus');

    cy.get('form').find('select').should('have.value', 'BY');
  });
});
