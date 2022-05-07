/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
        apartgsrcurl_01:   ("/apartment-listing/search?longitude=-122.288818&latitude=37.598167&numberOfChildren=2&numberOfAdults=2&numberOfInfants=1&arrive=2022-10-01&depart=2022-12-25"),
};
 
 // APARTMENT: Search All APARTMENT BY GUEST with valid credentials (GET)
describe('APARTMENT: Search APARTMENT by Guest (GET)', () => {

      it('Search all listed apartment by guest with valid credentials', () => {
        cy.request({
            method: 'GET',
            url: user.apartgsrcurl_01,
  
            headers: {
                  "authorization": (Cypress.env('token'))
            }
        }).then((res)=>{
              expect(res.status).to.eq(200)
        })
    
        })
         // Guest Search Apartment with Invalid credentials
    it('Search all listed apartment by guest with invalid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.apartgsrcurl_01,
          failOnStatusCode: false,
          headers: {
                "authorization": (Cypress.env('token')) + "OAGYH"
          }
      }).then((res)=>{
        expect(res.status).to.eq(400)
        expect(res.body.error).to.eq('Bad Request')
        expect(res.body.message).to.eq('invalid signature')
      })
  
      })
    })
