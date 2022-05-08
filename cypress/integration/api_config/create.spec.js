/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    configurl_01:   ("/app-config/create")
};
  
// CONFIG: Create CarListing Config with existing Credentails
describe('CONFIG: Create CarListing Config (POST)', () => {

//     it('Create Api carlisting Config', () => {
//         cy.request({
//               method: 'POST',
//             url: user.configurl_01,
//             headers: {
//                 "authorization": (Cypress.env('token'))
//           },
//             body:             {
//                     "carListingConfig":{
//                             "minimumCarYearAllowed": varText.yearNumb   
//                     },
//                     "bookingConfig":{
//                          "checkInFeeFromGuest": varText.feeNumb,
//                          "checkInFeeFromHost": varText.feeNumb
//                     }
//             }
//         }).then((res)=>{
          
//               expect(res.status).to.eq(409)

//         })
//   });


    it('Create car listing config with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.configurl_01,
                headers: {
                    "authorization": (Cypress.env('token'))  + "SDGH"
              },
  
            body: {
                
                    "carListingConfig":{
                            "minimumCarYearAllowed": 2000   
                    },
                    "bookingConfig":{
                         "checkInFeeFromGuest": 0.1,
                         "checkInFeeFromHost": 0.03
                    }
                }
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  });


    it('Test carlisting config Creation using invalid checkInFeeFromGuest', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.configurl_01,
  
            body: {
                "carListingConfig":{
                        "minimumCarYearAllowed": 2000   
                },
                "bookingConfig":{
                     "checkInFeeFromGuest":"cdftt",
                     "checkInFeeFromHost": 0.03
                }
            }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
        })
  })

})