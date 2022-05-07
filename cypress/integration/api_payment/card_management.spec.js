/// <reference types="Cypress" />
import RandText from '../POM/RandText';

const varText = new RandText();
const user = { 
    cdmgturl_01:   ("/payment/create-billing"),
   // cdmgturl_02:   ("/payment/modify-user-card"),
   // cdmgturl_03:   ("/payment/get-user-card/:user_id"),
   // cdmgturl_04:   ("payment/delete-user-card/:card_id"),
};


// // PAYMENT: Create User Billing (POST)
// describe('PAYMENT: Create User Billing (POST)', () => {
// // Valid Credentials
//     it('Test the creation of user billing card with valid credentials', () => {
      
//       cy.request({
//           method: 'POST',
//           url: user.cdmgturl_01,
          

//           headers: {
//                 "authorization": (Cypress.env('token'))
//           },
//           body: {
//             "card_number": "555555555555444",
//                   "exp_month": "05",
//                   "exp_year": "22",
//                   "card_cvc": varText.cvcNumb,
//                   "card_name": varText.test,
//                   "country": "US",
//                   "postal_code": varText.codeNumb,
//                   "gateway": "Stripe"
//             }
            
          
//       }).then((res)=>{
//             // cy.log(varText.test)
//             expect(res.status).to.eq(200)
                 
//       })
  
//       })
// })

describe('PAYMENT: Create a user billig card (POST)', () => {
      //invalid card number
      it('Test the creation of user billing card with invalid card Number', () => {
      
            cy.request({
                method: 'POST',
                url: user.cdmgturl_01,
                failOnStatusCode : false,
      
                headers: {
                      "authorization": (Cypress.env('token'))
                },
                body: {
                  "card_number": varText.cardNumb,
                        "exp_month": "05",
                        "exp_year": "22",
                        "card_cvc": varText.cvcNumb,
                        "card_name": varText.test,
                        "country": "US",
                        "postal_code": varText.codeNumb,
                        "gateway": "Stripe"
                  }
                  
                
            }).then((res)=>{
                  // cy.log(varText.test)
                  expect(res.status).to.eq(400)
                  expect(res.body.error).to.eq('Bad Request')
                  
            })

/// Invalid Signature
        it('Test the creation of a billing card with invalid credentials', () => {
          cy.request({
              method: 'POST',
              failOnStatusCode: false,
              url: user.cdmgturl_01,
    
              headers: {
                    "authorization": (Cypress.env('token')) + 'Qgh2'
              },
              body:{
                  "card_number": varText.cardNumb,
                  "exp_month": "05",
                  "exp_year": "22",
                  "card_cvc": varText.cvcNumb,
                  "card_name": varText.test,
                  "country": "US",
                  "postal_code": varText.codeNumb,
                  "gateway": "Stripe"
         }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
            expect(res.body.message).to.eq('invalid signature')
      })
  
      })

    })
    
    // Invalid Signature
        it('Test the creation of a billing card with existing credentials', () => {
          cy.request({
              method: 'POST',
              failOnStatusCode: false,
              url: user.cdmgturl_01,
    
              headers: {
                    "authorization": (Cypress.env('token')) 
              },
              body:{
                  "card_number":"555555555555444",
                  "exp_month": "05",
                  "exp_year": "22",
                  "card_cvc": varText.cvcNumb,
                  "card_name": varText.test,
                  "country": "US",
                  "postal_code": varText.codeNumb,
                  "gateway": "Stripe"
              }
          }).then((res)=>{
                expect(res.status).to.eq(400)
                expect(res.body.error).to.eq('Bad Request')
                
          })
      })
      
          })
    
    





