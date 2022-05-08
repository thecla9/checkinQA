/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();

const user = { 
    cadvtyurl_01:   ("/adventure-type/create"),
    cadvtyurl_02:   ("/adventure-type/get-all"),
};

 
describe('ADVENTURE TYPES: Create', () => {

    it('Create Adventure Types', () => {
        cy.request({
              method: 'POST',
            url: user.cadvtyurl_01,
  
            headers: {
              "authorization": (Cypress.env('token')),
              "content-type": "application/json"
        },
            body: {
                "name": varText.test,
                "services": "AdventureListing",
                "createdBy": varText.test,
                "verified": varText.test,
                "createdByAccountType": "Host"
              
              }
        }).then((res)=>{
         
              expect(res.status).to.eq(201)
        })
  });


  it('Get adventure types with valid credentials', function () {
    cy.request({
        method: 'GET',
        url: user.cadvtyurl_02,

        headers: {
              "authorization": (Cypress.env('token'))
        }
    }).then((res)=>{
         
          expect(res.status).to.eq(200)
    })

    })

  it('Get adventure types  with invalid credentials', function () {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: user.cadvtyurl_02,

        headers: {
              "authorization": (Cypress.env('token')+'Gwre')
        }
    }).then((res)=>{
        
          expect(res.status).to.eq(400)
          expect(res.body.error).to.eq('Bad Request')
    })

    })

  it('Get adventure types  with valid credentials', function () {
    cy.request({
        method: 'GET',
        url: user.cadvtyurl_02,

        headers: {
              "authorization": (Cypress.env('token'))
        }
    }).then((res)=>{
          // cy.log(this.host)
          expect(res.status).to.eq(200)
    })
})

    });