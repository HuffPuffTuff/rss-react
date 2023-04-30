/// <reference types="cypress" />

describe('Navigate tests', () => {
  it('Should navigate through pages', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });

  it('Should redirect to 404 page', () => {
    cy.visit('/test');
    cy.get('p').should('contain', `Page doesn't exist!`);
  });

  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
