const HomePage = require('../support/pages/home_page');

describe('Contact Us Tests', () => {
  
  beforeEach('Load Qubik page', () => {
    cy.visitHomePage();
    HomePage.openContactUs();
  })

  it('Submit form without filling any fields', () => {    
    HomePage.submitForm();
    HomePage.validateErrorMessages( ['firstname', 'lastname', 'email', 'message']);
  })
  
  it('Submit form with name only', () => {    
    HomePage.typeField('firstname', 'Test name')
    HomePage.submitForm();

    HomePage.validateErrorMessages( ['firstname'], false);
    HomePage.validateErrorMessages( ['lastname', 'email', 'message']);
  })
})