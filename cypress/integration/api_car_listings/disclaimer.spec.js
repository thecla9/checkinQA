/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    discurl_01: ("/car-disclaimer/create"), 
    discurl_02: ("/car-disclaimer/create-many"),
    discurl_03: ("/car-disclaimer/search"),
};


// DISCLAIMER: Single Creation (POST)
describe('CAR DISCLAIMER: Single Creation (POST)', () => {

    it('Create Signle Car Disclaimer with Valid Credentials', () => {
      cy.request({
          method: 'POST',
          url: user.discurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of single car disclaimer with already existing value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.discurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true
          }
      }).then((res)=>{
            expect(res.status).to.eq(409)
            expect(res.body.error).to.eq('Conflict')
            expect(res.body.message).to.eq('value already exists')
      })
  
      })


    it('Test the creation of single car disclaimer with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.discurl_01,

          body: {
            "value" : "",
            "isActive" :true
          }
      }).then((res)=>{
            expect(res.status).to.eq(401)
            expect(res.body.error).to.eq('Unauthorized')
            expect(res.body.message).to.eq('\"value\" is not allowed to be empty')
      })
  
      })
      

      it('Test the creation of single car disclaimers with a "many disclaimer POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.discurl_01,
  
            body: [
                {
                    "value" : varText.test,
                    "isActive" :true
                },
                {
                    "value" : varText.test,
                    "isActive" :true
                }      
                ]
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
              expect(res.body.message).to.eq('\"value\" must be of type object')
        })
    
        })


})

// DISCLAIMER: Multiple Creation (POST)
describe('CAR DISCLAIMER: Multiple Creation (POST)', () => {

    it('Create multiple Car Disclaimer with Valid Credentials', () => {
      cy.request({
          method: 'POST',
          url: user.discurl_02,

          body: [
            {
                "value" : varText.test2,
                "isActive" :true
            },
            {
                "value" : varText.test3,
                "isActive" :true
            }
                
            ]
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of multiple car disclaimer with already existing value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.discurl_02,

          body: [
            {
                "value" : varText.test2,
                "isActive" :true
            },
            {
                "value" : varText.test3,
                "isActive" :true
            }
                
            ]
      }).then((res)=>{
            expect(res.status).to.eq(409)
            expect(res.body.error).to.eq('Conflict')
            expect(res.body.message).to.eq('one or more value\'s already exists')
      })
  
      })


    it('Test the creation of multiple car disclaimer with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.discurl_02,

          body: [
            {
                "value" : "",
                "isActive" :true
            },
            {
                "value" : "",
                "isActive" :true
            }
                
            ]
      }).then((res)=>{
            expect(res.status).to.eq(401)
            expect(res.body.error).to.eq('Unauthorized')
            expect(res.body.message).to.eq('\"[0].value\" is not allowed to be empty')
      })
  
      })
      

      it('Test the creation of multipl car disclaimers with a "single disclaimer POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.discurl_02,
  
            body:
                {
                    "value" : varText.test3,
                    "isActive" :true
                }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
              expect(res.body.message).to.eq('\"value\" must be an array')
        })
    
        })

})


// DISCLAIMER: Search (GET)
describe('CAR DISCLAIMER: Search (GET)', () => {

    it('Test Car  Disclaimer Search with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.discurl_03,

      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })



})