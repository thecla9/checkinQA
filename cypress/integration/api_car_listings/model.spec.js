/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    carmdlurl_01: ("/car-model/create"),
    carmdlurl_02: ("/car-model/create-many"),
    carmdlurl_03: ("/car-model/search"),
};


// CAR MODEL: Single Creation (POST)
describe('CAR MODEL: Single Creation (POST)', () => {

    it('Test the creation of single car model using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carmdlurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true,
            "make" : "61f60fa7ac90e0f756214d5b"
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of car model with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmdlurl_01,

          body: {
            "value" : varText.test,
            "isActive" :true,
            "make" : "61f60fa7ac90e0f756214d5b"
          }
      }).then((res)=>{
            expect(res.status).to.eq(409)
            expect(res.body.error).to.eq('Conflict')
            expect(res.body.message).to.eq('value already exists')
      })
  
      })


    it('Test the creation of single car model with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmdlurl_01,

          body: {
            "value" : "",
            "isActive" :true,
            "make" : "61f60fa7ac90e0f756214d5b"
          }
      }).then((res)=>{
            expect(res.status).to.eq(401)
            expect(res.body.error).to.eq('Unauthorized')
            expect(res.body.message).to.eq('\"value\" is not allowed to be empty')
      })
  
      })
      

      it('Test the creation of single car model with a "multiple disclaimer" POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carmdlurl_01,
  
            body: [
                {
                    "value" : varText.test,
                    "isActive" :true,
                    "make" : "61f60fa7ac90e0f756214d5b"
                },
                {
                    "value" : varText.test,
                    "isActive" :true,
                    "make" : "61f60fa7ac90e0f756214d5b"
                }      
                ]
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
              expect(res.body.message).to.eq('\"value\" must be of type object')
        })
    
        })


})

// CAR MODEL: Multiple Creation (POST)
describe('CAR MODEL: Multiple Creation (POST)', () => {

    it('Test the creation of multiple car model using valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.carmdlurl_02,

          body: [
            {
                "value" : varText.test2,
                "isActive" :true,
                "make" : "626727fd7287f0cc14c85600"
            },
            {
                "value" : varText.test3,
                "isActive" :true,
                "make" : "626727fd7287f0cc14c85600"
            }
              
            ]
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })


    it('Test the creation of multiple car model with already existing credential', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmdlurl_02,

          body: [
            {
                "value" : varText.test2,
                "isActive" :true,
                "make" : "626727fd7287f0cc14c85600"
            },
            {
                "value" : varText.test3,
                "isActive" :true,
                "make" : "626727fd7287f0cc14c85600"
            }
                
            ]
      }).then((res)=>{
            expect(res.status).to.eq(409)
            expect(res.body.error).to.eq('Conflict')
            expect(res.body.message).to.eq('one or more value\'s already exists')
      })
  
      })


    it('Test the creation of multiple car model with an empty value', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.carmdlurl_02,

          body: [
            {
                "value" : "",
                "isActive" :true,
                "make" : "626727fd7287f0cc14c85600"
            },
            {
                "value" : "",
                "isActive" :true,
                "make" : "626727fd7287f0cc14c85600"
            }
                
            ]
      }).then((res)=>{
            expect(res.status).to.eq(401)
            expect(res.body.error).to.eq('Unauthorized')
            expect(res.body.message).to.eq('\"[0].value\" is not allowed to be empty')
      })
  
      })
      

      it('Test the creation of multiple car model with a "single car model POST method"', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.carmdlurl_02,
  
            body:
                {
                    "value" : varText.test3,
                    "isActive" :true,
                    "make" : "626727fd7287f0cc14c85600"
                }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
              expect(res.body.message).to.eq('\"value\" must be an array')
        })
    
        })


})


// CAR MODEL: Search (GET)
describe('CAR MODEL: Search (GET)', () => {

    it('Test car model Search with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.carmdlurl_03,

      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })


})