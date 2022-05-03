/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    carmlgurl_01: ("/car-mileage/create"),
    carmlgurl_02: ("/car-mileage/create-many"),
    carmlgurl_03: ("/car-mileage/search"),
};


// CAR MILEAGE: Single Creation (POST)
describe('CAR MILEAGE: Single Creation (POST)', () => {

    it('Test the creation of single car mileage using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carmlgurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true,
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of car mileage with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmlgurl_01,

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


    it('Test the creation of single car mileage with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmlgurl_01,

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
      

      it('Test the creation of single car mileage with a "multiple disclaimer" POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carmlgurl_01,
  
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

// CAR MILEAGE: Multiple Creation (POST)
describe('CAR MILEAGE: Multiple Creation (POST)', () => {

    it('Test the creation of multiple car mileage using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carmlgurl_02,

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


    it('Test the creation of multiple car mileage with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmlgurl_02,

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


    it('Test the creation of multiple car mileage with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmlgurl_02,

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
      

      it('Test the creation of multiple car mileage with a "single car mileage POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carmlgurl_02,
  
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


// CAR MILEAGE: Search (GET)
describe('CAR MILEAGE: Search (GET)', () => {

    it('Test car mileage Search with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.carmlgurl_03,

      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })


})