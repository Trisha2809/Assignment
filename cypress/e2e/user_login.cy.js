describe('User Login', () => {
    it('User Login with valid credential', () => {
      cy.visit('https://automationexercise.com/')

      // click on Signup/Login button
      cy.contains('Signup / Login').click() 
      
       // Login section is visible
       cy.contains('Login to your account')

       // Enter registered emaild id , password and click login button
       cy.get('[data-qa="login-email"]').type('Testuser999@abc.com')
       cy.get('[data-qa="login-password"]').type('Pass@123')
       cy.get('[data-qa="login-button"]').click()

       // Logged in as testuser is visible
       cy.contains(' Logged in as Testuser');
    })

    it('User Login with invalid credential', () => {
      cy.visit('https://automationexercise.com/')

      // click on Signup/Login button
      cy.contains('Signup / Login').click() 
      
       // Login section is visible
       cy.contains('Login to your account')

       // Enter registered emaild id , password and click login button
       cy.get('[data-qa="login-email"]').type('Testuser999@abc.com')
       cy.get('[data-qa="login-password"]').type('Invalid@123')
       cy.get('[data-qa="login-button"]').click()

       // invalid credential message is visible
       cy.contains('Your email or password is incorrect!');
    })
  })
  