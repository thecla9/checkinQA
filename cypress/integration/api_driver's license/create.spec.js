/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crtdlurl_01:   ("/driver-license/create"),
   
};

// DRIVER'S LICENSE: Create (POST)
describe('DRIVERS LICENSE: Create drivers license (POST)', () => {
    // Valid Credentials
        it('Test the creation of drivers license with valid credentials', () => {
          
          cy.request({
              method: 'POST',
              url: user.crtdlurl_01,
    
              headers: {
                    "authorization": (Cypress.env('token'))
              },
              body: {
                "value": varText.phoneNumb+varText.test,
                "expirationDate" : "12/12/2002",
                "file" : "61f60fa7ac90e0f756214d5b",
                "nationality" : "Algeria",
                "countryOfResidence" : "Nigeria",
                "state" : "Lagos",
                "issuedDate" : "12/12/2020",
                "firstName" : "Thecla",
                "lastName" : "Ezeh",
                "dateOfBirth" : "11/14/2002"
            }
        }).then((res)=>{
           
          expect(res.status).to.eq(201)
            
          })
      
          });
          // Invalid Credential
    it('Test the creation of driver license with invalid credentials', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.crtdlurl_01,
  
            headers: {
                  "authorization": (Cypress.env('token')) + 'Qsgh'
            },
            body: {
                "value":varText.phoneNumb+varText.test,
                "expirationDate" : "12/12/2002",
                "file" : "61f60fa7ac90e0f756214d5b",
                "nationality" : "Algeria",
                "countryOfResidence" : "Nigeria",
                "state" : "Lagos",
                "issuedDate" : "12/12/2020",
                "firstName" : "Thecla",
                "lastName" : "Ezeh",
                "dateOfBirth" : "11/14/2002"
            }
            
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              expect(res.body.message).to.eq('invalid signature')
        })
    
        })
        
// Existing Credentials
    it('Test the creation of drivers license with existing credentials', () => {
      
      cy.request({
          method: 'POST',
          url: user.crtdlurl_01,
          failOnStatusCode: false,
          headers: {
                "authorization": (Cypress.env('token'))
          },
          body: {
            "value":varText.phoneNumb+varText.test,
            "expirationDate" : "12/12/2002",
            "file" : "61f60fa7ac90e0f756214d5b",
            "nationality" : "Algeria",
            "countryOfResidence" : "Nigeria",
            "state" : "Lagos",
            "issuedDate" : "12/12/2020",
            "firstName" : "Thecla",
            "lastName" : "Ezeh",
            "dateOfBirth" : "11/14/2002"
        }
      }).then((res)=>{
        expect(res.status).to.eq(409)
        expect(res.body.error).to.eq('Conflict')
        expect(res.body.message).to.eq('driver\'s license already exists')
        
            
      })
  
      })
    })

      

