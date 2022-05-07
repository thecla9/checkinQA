/// <reference types="Cypress" />


const user = { 
    getlaccurl_01:   ("/driver-license/get-license-by-account/626beb6ae4217529ca05286f"),
    
};

 
describe('GET LICENSE BY ACCOUNT: Get', () => {

    it('Get license by account using valid details', () => {
        cy.request({
              method: 'GET',
              url: user.getlaccurl_01,
              failOnStatusCode: false,
  
            headers: {
              "authorization": (Cypress.env('token')),
              "content-type": "application/json"
        },
           
        }).then((res)=>{
          
                expect(res.status).to.eq(200)
        })
  });


  it('Get license by account with invalid credentials', function () {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: user.getlaccurl_01,

        headers: {
              "authorization": (Cypress.env('token')+'Gwre')
        }
    }).then((res)=>{
          // cy.log(this.account)
          expect(res.status).to.eq(400)
          expect(res.body.error).to.eq('Bad Request')
    })

    })

})