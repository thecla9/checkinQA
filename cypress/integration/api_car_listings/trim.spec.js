/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    cartrmurl_01: ("/car-trim/create"), 
    cartrmurl_02: ("/car-trim/create-many"), 
    cartrmurl_03: ("/car-trim/search"), 
};

// CAR TRIM: Single Creation (POST)
describe('CAR TRIM: Single Creation (POST)', () => {

    it('Test the creation of single car trim using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.cartrmurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of car trim with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.cartrmurl_01,

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


    it('Test the creation of single car trim with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.cartrmurl_01,

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
      

      it('Test the creation of single car trim with a "multiple disclaimer" POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.cartrmurl_01,
  
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

// CAR TRIM: Multiple Creation (POST)
describe('CAR TRIM: Multiple Creation (POST)', () => {

    it('Test the creation of multiple car trim using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.cartrmurl_02,

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


    it('Test the creation of multiple car trim with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.cartrmurl_02,

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


    it('Test the creation of multiple car trim with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.cartrmurl_02,

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
      

      it('Test the creation of multiple car trim with a "single car trim POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.cartrmurl_02,
  
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


// CAR TRIM: Search (GET)
describe('CAR TRIM: Search (GET)', () => {

    it('Test car trim Search with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.cartrmurl_03,

      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })


})