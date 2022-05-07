/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    srcdlurl_01:   ("//driver-license/search?nationality[0]=Algeria"),
    
};

// SEARCH DRIVER'S LICENSE: Create (GET)
describe('SEARCH DRIVERS LICENSE:search for drivers license (GET)', () => {
    // Valid Credentials
        it('Test the search for drivers license with valid credentials', () => {
          
          cy.request({
              method: 'GET',
              url: user.srcdlurl_01,
    
              headers: {
                    "authorization": (Cypress.env('token'))
              },
            
          }).then((res)=>{
                expect(res.status).to.eq(200)
             
          })
      
          });
          it('Test the search for drivers license using invalid credentials', () => {
            cy.request({
                    method: 'GET',
                    failOnStatusCode: false,
                    url: user.srcdlurl_01,
                    headers: {
                        "authorization": (Cypress.env('token')) + "QGHY"
                  },
            
            }).then((res)=>{
                  expect(res.status).to.eq(400)
         
            })
      });
    
    })
    
        

    
