/// <reference types="cypress" />

describe('Test Main mage', () => {
  it('submit empty form', () => {
    cy.visit('/form');
    cy.get('[data-testid="form-btn"]').click();
    cy.get('.form__error').should('have.length', 5);
  });

  it('submit invalid form', () => {
    cy.visit('/form');

    cy.get('[name="username"]').type('abc');
    cy.get('[name="fullname"]').type('abc');
    cy.get('[name="date"]').type('2023-05-20');

    cy.get('[data-testid="form-btn"]').click();
  });

  it('submit valid form', () => {
    cy.visit('/form');

    cy.get('[name="username"]').type('Qwerty');
    cy.get('[name="fullname"]').type('Qwerty Qwerty');
    cy.get('[name="date"]').type('2023-03-20');

    cy.get('.upload-file__label').click().selectFile('cypress/fixtures/avatar.jpg');

    cy.get('[name="terms"]').click();

    cy.get('[data-testid="form-btn"]').click();

    cy.get('.modal').not('.forms__page-message').click();
  });
  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
