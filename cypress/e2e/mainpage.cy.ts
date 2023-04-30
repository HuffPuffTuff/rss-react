/// <reference types="cypress" />

describe('Test Main mage', () => {
  it('checks default cards presence', () => {
    cy.visit('/');
    cy.get('[id="input-search"]').type('{enter}');
    cy.get('[data-testid="photoCard"]').should('have.length', 20);
  });

  it('check seacrh and modal', () => {
    cy.visit('/');

    cy.get('[id="input-search"]').type('boxedwater{enter}');
    cy.get('[data-testid="photoCard"]').should('have.length', 5);

    cy.get('[data-testid="photoCard"]').eq(0).click();
    cy.get('[data-testid="closeModalIcon').click();

    cy.get('[data-testid="photoCard"]').eq(3).click();
    cy.get('[data-testid="closeModalIcon').click();
  });

  it('check not found cards', () => {
    cy.visit('/');
    cy.get('[id="input-search"]').type('dgcbsadlkjvc{enter}');

    cy.get('[data-testid="no-photos"]').should('exist');
  });

  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
