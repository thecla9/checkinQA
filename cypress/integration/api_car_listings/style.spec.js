/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    carstlurl_01: ("/car-style/create"), 
    carstlurl_02: ("/car-style/create-many"), 
    carstlurl_03: ("/car-style/search"), 
};


// CAR STYLE: Single Creation (POST)
describe('CAR STYLE: Single Creation (POST)', () => {

    it('Test the creation of single car style using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carstlurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of car style with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carstlurl_01,

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


    it('Test the creation of single car style with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carstlurl_01,

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
      

      it('Test the creation of single car style with a "multiple disclaimer" POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carstlurl_01,
  
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

// CAR STYLE: Multiple Creation (POST)
describe('CAR STYLE: Multiple Creation (POST)', () => {

    it('Test the creation of multiple car style using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carstlurl_02,

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


    it('Test the creation of multiple car style with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carstlurl_02,

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


    it('Test the creation of multiple car style with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carstlurl_02,

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
      

      it('Test the creation of multiple car style with a "single car style POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carstlurl_02,
  
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


// CAR STYLE: Search (GET)
describe('CAR STYLE: Search (GET)', () => {

    it('Test car style Search with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.carstlurl_03,

      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })


})