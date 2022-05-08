// /// <reference types="Cypress" />
// import RandText from '../POM/RandText';


// const varText = new RandText();
// const user = { 
//     upconfigurl_01:   ("/app-config/update")
// };
  
// // CONFIG: Update CarListing Config with valid Credentails
// describe('CONFIG: Update CarListing Config (POST)', () => {

//     it('Update  carlisting Config', () => {
//         cy.request({
//               method: 'POST',
//             url: user.upconfigurl_01,
//             headers: {
//                 "authorization": (Cypress.env('token'))
//           },
//             body:    {
//                 "carListingConfig" : {
//                     "minimumCarYearAllowed" : varText.yearNumb                }
//             }
//         }).then((res)=>{
          
//               expect(res.status).to.eq(201)

//         })
//     })
// });