describe('User Registration', () => {
    it('User registration with mandatory fields', () => {
      cy.visit('https://automationexercise.com/')

      // click on Signup/Login button
      cy.contains('Signup / Login').click() 
      
       // Signup page is visible
       cy.contains('New User Signup!')

       // enter name and email id and click signup button
       cy.get('[data-qa="signup-name"]').click().type('Testuser')
       cy.get('[data-qa="signup-email"]').click().type('Testuser10708@abc.com')
       cy.get('[data-qa="signup-button"]').click()

       // registration details page is visible
       cy.contains('Enter Account Information')
       
       // enter the mandatory fields
       cy.get('[data-qa="password"]').type('Pass@123')
       cy.get('[data-qa="first_name"]').type('Test')
       cy.get('[data-qa="last_name"]').type('User')
       cy.get('[data-qa="address"]').type('ABC street')
       cy.get('[data-qa="state"]').type('Berlin')
       cy.get('[data-qa="city"]').type('Berlin')
       cy.get('[data-qa="zipcode"]').type('11111')
       cy.get('[data-qa="mobile_number"]').type('1111111111')

       // clikc on create account button
       cy.get('[data-qa="create-account"]').click()
       

       // account created message
       cy.contains('Account Created!');
    })
  })
  