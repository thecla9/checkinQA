/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    carmkurl_01: ("/car-make/create"),
    carmkurl_02: ("/car-make/create-many"),
    carmkurl_03: ("/car-make/search"),
};


// CAR MAKE: Single Creation (POST)
describe('CAR MAKE: Single Creation (POST)', () => {

    it('Test the creation of single car make using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carmkurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of car make with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmkurl_01,

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


    it('Test the creation of single car make with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmkurl_01,

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
      

      it('Test the creation of single car make with a "multiple disclaimer" POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carmkurl_01,
  
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

// CAR MAKE: Multiple Creation (POST)
describe('CAR MAKE: Multiple Creation (POST)', () => {

    it('Test the creation of multiple car make using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carmkurl_02,

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


    it('Test the creation of multiple car make with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmkurl_02,

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


    it('Test the creation of multiple car make with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmkurl_02,

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
      

      it('Test the creation of multiple car make with a "single car make POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carmkurl_02,
  
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


// CAR MAKE: Search (GET)
describe('CAR MAKE: Search (GET)', () => {

    it('Test Car Make Search with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.carmkurl_03,

      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })


})