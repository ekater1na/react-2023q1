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
    cy.get("input[type='text']").first().should('have.attr', 'placeholder', 'First name');

    cy.get("input[type='text']").first().type('ann');

    cy.get("input[type='text']").first().should('have.value', 'ann');
  });

  it('should contain date input', () => {
    cy.get("input[type='date']").should('have.attr', 'placeholder', 'Birthday');

    cy.get("input[type='date']").type('2023-01-01');

    cy.get("input[type='date']").should('have.value', '2023-01-01');
  });

  it('should contain select', () => {
    cy.get('select').should('have.attr', 'placeholder', 'Country');

    cy.get('select').select('Belarus');

    cy.get('select').should('have.value', 'BY');
  });

  it('should contain file input', () => {
    cy.get("input[type='file']").should('have.attr', 'placeholder', 'Photo');

    cy.get("input[type='file']").selectFile('./src/assets/react.svg');
  });

  it('should contain errors', () => {
    cy.get("input[type='submit']").click();

    cy.get('.error-message').should('have.length', '7');
    cy.get("input[type='submit']").should('not.be.disabled');
  });

  it('should submit form', () => {
    cy.get("input[type='text']:first-child").type('ann');
    cy.get("input[type='text']:nth-child(2)").type('smith');
    cy.get("input[type='date']").type('2023-01-01');
    cy.get('select').select('Belarus');
    cy.get("input[type='file']").selectFile('./src/assets/react.svg');
    cy.get("input[type='radio']").check();
    cy.get("input[type='checkbox']").click();

    cy.get('.form').submit();

    cy.get('.error-message').should('have.length', '0');

    cy.get('.form-card-content').should('be.visible');
    cy.get('.form-card-content').should('have.length', '1');
  });
});
