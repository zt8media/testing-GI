// cypress/e2e/homepage.cy.js

describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');  
  });

  it('should display the logo', () => {
    cy.get('.logo').should('be.visible');
  });

  it('should have the correct heading', () => {
    cy.get('h3').contains('Your guided path to programming enlightenment');
  });

  it('should have a "Begin Journey" button', () => {
    cy.get('.jrny-button').should('be.visible').contains('Begin Journey');
  });

  it('should display info sections with correct content', () => {
    cy.get('.info').eq(0).find('h3').contains('Personalized Quizzes');
    cy.get('.info').eq(1).find('h3').contains('Rewarding');
    cy.get('.info').eq(2).find('h3').contains('Personal SME');
  });
});
