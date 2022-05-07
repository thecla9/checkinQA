/// <reference types="Cypress" />
import RandText from '../POM/RandText';

const varText = new RandText();
const user = { 
    protycaturl_01:   ("property-type-category/search"),
    protycaturl_02:   ("/property-type-category/create")
    //protycaturl_03:   ("/property-type-category/update/620ff23f6d64b62d2550bb8d")
};

// APARTMENT: Search property type category with valid credentials (GET)
describe('APARTMENT: Search property type category  (GET)', () => {

  it('Search property type category with valid credentials', () => {
    cy.request({
        method: 'GET',
        url: user.protycaturl_01,

        headers: {
              "authorization": (Cypress.env('token'))
        }
    }).then((res)=>{
          expect(res.status).to.eq(200)
    })

    })
     //  Search property type category with Invalid credentials
it('Search property type category with invalid credentials', () => {
  cy.request({
      method: 'GET',
      url: user.protycaturl_01,
      failOnStatusCode: false,
      headers: {
            "authorization": (Cypress.env('token')) + "OAGYH"
      }
  }).then((res)=>{
    expect(res.status).to.eq(400)
    expect(res.body.message).to.eq('invalid signature')
  })

  })
}),

  describe('APARTMENT: Create  property type option (GET)', () => {
  
      it('Create property type category with valid credentials', () => {
        cy.request({
            method: 'POST',
            url: user.protycaturl_02,
    
            headers: {
                  "authorization": (Cypress.env('token'))
            },
            body: {
                "name":varText.test,
                "isActive":true
            }
        }).then((res)=>{
              expect(res.status).to.eq(201)
        })
    
        })
         //  Create property type options with Invalid credentials
    it('Create property type option with invalid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.protycaturl_02,
          failOnStatusCode: false,
          headers: {
                "authorization": (Cypress.env('token')) + "OAGYH"
          },
          body:
            {
                "name": varText.test,
                "isActive":true
            }

          
      }).then((res)=>{
        expect(res.status).to.eq(400)
        expect(res.body.message).to.eq('invalid signature')
      })
    
      })
    })
    
//   describe('APARTMENT: Update  property type option (GET)', () => {
  
//     it('Update property type category with valid credentials', () => {
//       cy.request({
//           method: 'POST',
//           url: user.protycaturl_03,
  
//           headers: {
//                 "authorization": (Cypress.env('token'))
//           },
//           body: {
//               "name":varText.test,
//               "isActive":true
//           }
//       }).then((res)=>{
//             expect(res.status).to.eq(201)
//       })
  
//       })
//        //  Update property type options with Invalid credentials
//   it('Update property type option with invalid credentials', () => {
//     cy.request({
//         method: 'PUT',
//         url: user.protycaturl_03,
//         failOnStatusCode: false,
//         headers: {
//               "authorization": (Cypress.env('token')) + "OAGYH"
//         },
//         body:
//           {
//               "name": varText.test,
//               "isActive":true
//           }

        
//     }).then((res)=>{
//       expect(res.status).to.eq(400)
//       expect(res.body.message).to.eq('invalid signature')
//     })
  
//     })
//   })