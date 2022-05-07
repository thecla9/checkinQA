/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crtcalurl_01:   ("/calendar/")
};
  
// ACCOUNT: Create calendar with Valid Credentails
describe('CALENDAR: Create calendar (POST)', () => {

    it('Create calendar with Valid Credentails', () => {
        cy.request({
              method: 'POST',
            url: user.crtcalurl_01,
            headers: {
                "authorization": (Cypress.env('token'))
          },
  
            body: [
                {
                   
                    "date":"2022-04-10",
                    "serviceType":"ApartmentListing",
                    "amount":1000,
                    "service":"62385bcf48a407a6ac5f6058"  
                },
                {
                    
                    "date":"2022-04-06",
                    "serviceType":"ApartmentListing",
                    "amount":2000,
                    "service":"62385bcf48a407a6ac5f6058"
                    
                    
                }
                ]
        }).then((res)=>{
        expect(res.status).to.eq(201)
        })
  });


    it('Create calendar with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crtcalurl_01,
                headers: {
                    "authorization": (Cypress.env('token')) + "ÖAGHD"
              },
  
            body: [
                {
                   
                    "date":"2022-04-10",
                    "serviceType":"Apartmentlisting",
                    "amount":1000,
                    "service":"62385bcf48a407a6ac5f6058"  
                },
                {
                    
                    "date":"2022-04-06",
                    "serviceType":"ApartmentListing",
                    "amount":2000,
                    "service":"62385bcf48a407a6ac5f6058"
                    
                    
                }
                ]
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  });


    it('Test calendar creation using invalid date', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crtcalurl_01,
  
            body: [
                {
                   
                    "date":"20219-04-10",
                    "serviceType":"ApartmentListing",
                    "amount":1000,
                    "service":"62385bcf48a407a6ac5f6058"  
                },
                {
                    
                    "date":"2022-04-06",
                    "serviceType":"ApartmentListing",
                    "amount":2000,
                    "service":"62385bcf48a407a6ac5f6058"
                    
                    
                }
                ]
            }).then((res)=>{
                expect(res.status).to.eq(500)
               
          })
    });
  
  })