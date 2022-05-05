/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
    aparturl_01:   ("/apartment-listing/create"),
    aparturl_02:   ("/apartment-listing/update"),
    aparturl_03:   ("/apartment-listing/?=Thecla"),
    aparturl_04:   ("/apartment-listing/"),
    aparturl_05:   ("/apartment-listing/upload-apartment-picture"),
    aparturl_06:   ("/apartment-listing/upload-apartment-video"),
};



// APARTMENT: Create (POST)
describe('APARTMENT: Create Apartment (POST)', () => {
// Valid Credentials
    it('Test the creation of Apartment with valid credentials', () => {
      
      cy.request({
          method: 'POST',
          url: user.aparturl_01,

          headers: {
                "authorization": (Cypress.env('token'))
          },
          body: {
            
                "address" : {
                     "country" : "Nigeria",
                     "city" : "Lagos",
                     "state": "Lagos",
                     "coordinates" : [-122.288818,37.598167]
                  
                 },
               "fees" : {
                     "extraGuestFee" : 1000,
                     "petFee" : 500,
                     "cleaningFee": 1000,
                     "securityDepositFee": 500,
                     "discountOffered": 300
                     
                 },
               "propertyTypeOption": "622196e2608b0854b1fd3ffb",
               "propertyType": "622198fcf17b2db120d64d4c",
               "whatGuestsBook": "EntirePlace",
               "forGuestsOnly": "Yes",
               "bedrooms": 2,
               "numberOfBeds": 2,
               "bedTypes": "King",
               "baths": 3,
               "numberOfAdults": 2,
               "numberOfInfants": 1,
               "numberOfChildren": 2,
               "title": "Luxirous Apartment",
               "basePrice": 1000,
               "description": "string",
               "photos": ["6203dbadfbc7cf57811be390","6203dbadfbc7cf57811be391"],
               "videos": ["6203dbadfbc7cf57811be390","6203dbadfbc7cf57811be391"],
               "allowedOptions":{
                   "petsAllowed" : true,
                   "smokingAllowed" : false,
                   "eventsPartiesAllowed": true
               },
               "additionalHouseRules": "61d8cdd15de219d8f8c4c5a0",
               "bookingAvailability": "Four",
               "whatMoreShouldGuestsKnow": "The apartment has an open pitch for excercise",
               "arriveBefore": "2:00pm",
               "arriveAfter": "3:00pm",
               "leaveBefore": "12:00pm",
               "minimumStayInNight": 2,
               "maximumStayInNight": 2,
               "amenities": ["6203db79fbc7cf57811be38e"],
               "bookingStatus":"UnBooked",
               "countTimesBooked":0
             
          }
      }).then((res)=>{
            // cy.log(varText.test)
            expect(res.status).to.eq(201)
      })
  
      })

// Invalid Credential
    it('Test the creation of Apartment with invalid credentials', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.aparturl_01,

          headers: {
                "authorization": (Cypress.env('token')) + 'Qsgh'
          },
          body: {
            "address" : {
                 "country" : "Nigeria",
                 "city" : "Lagos",
                 "state": "Lagos",
                 "coordinates" : [-122.288818,37.598167]
              
             },
           "fees" : {
                 "extraGuestFee" : 1000,
                 "petFee" : 500,
                 "cleaningFee": 1000,
                 "securityDepositFee": 500,
                 "discountOffered": 300
                 
             },
           "propertyTypeOption": "622196e2608b0854b1fd3ffb",
           "propertyType": "622198fcf17b2db120d64d4c",
           "whatGuestsBook": "EntirePlace",
           "forGuestsOnly": "Yes",
           "bedrooms": 2,
           "numberOfBeds": 2,
           "bedTypes": "King",
           "baths": 3,
           "numberOfAdults": 2,
           "numberOfInfants": 1,
           "numberOfChildren": 2,
           "title": "Luxirous Apartment",
           "basePrice": 1000,
           "description": "string",
           "photos": ["6203dbadfbc7cf57811be390","6203dbadfbc7cf57811be391"],
           "videos": ["6203dbadfbc7cf57811be390","6203dbadfbc7cf57811be391"],
           "allowedOptions":{
               "petsAllowed" : true,
               "smokingAllowed" : false,
               "eventsPartiesAllowed": true
           },
           "additionalHouseRules": "61d8cdd15de219d8f8c4c5a0",
           "bookingAvailability": "Four",
           "whatMoreShouldGuestsKnow": "The apartment has an open pitch for excercise",
           "arriveBefore": "2:00pm",
           "arriveAfter": "3:00pm",
           "leaveBefore": "12:00pm",
           "minimumStayInNight": 2,
           "maximumStayInNight": 2,
           "amenities": ["6203db79fbc7cf57811be38e"],
           "bookingStatus":"UnBooked",
           "countTimesBooked":0
         }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
            expect(res.body.message).to.eq('invalid signature')
      })
  
      })

    })

// APARTMENT: Update Apartment (PUT)
describe('APARTMENT: Update Apartment (PUT)', () => {

    // Valid Signature
        it('Test the update of Apartment with valid credentials', () => {
          cy.request({
              method: 'PUT',
              url: user.aparturl_02,
    
              headers: {
                    "authorization": (Cypress.env('token'))
              },
              body: {
                "address" : {
                     "country" : "Nigeria",
                     "city" : "Lagos",
                     "state": "Lagos",
                     "coordinates" : {
                         "coordinates" : [12,12]
                     }
                 },
               "fees" : {
                     "extraGuestFee" : 1000,
                     "petFee" : 500,
                     "cleaningFee": 1000,
                     "securityDepositFee": 500,
                     "discountOffered": 300
                     
                 },
               "propertyTypeOption": "UniqueSpaceOption",
               "propertyType": "Camper",
               "whatGuestsBook": "EntirePlace",
               "forGuestsOnly": "Yes",
               "bedrooms": 2,
               "numberOfBeds": 2,
               "bedTypes": "KingSize",
               "baths": 3,
               "numberOfAdults": 2,
               "numberOfInfants": 1,
               "numberOfChildren": 2,
               "title": "Luxirous Apartment",
               "basePrice": 20000,
               "description": "string",
               "photos": ["61d8cdd15de219d8f8c4c5a0"],
               "videos": ["61d8cdd15de219d8f8c4c5a0"],
               "allowedOptions":{
                   "petsAllowed" : true,
                   "smokingAllowed" : false,
                   "eventsPartiesAllowed": true
               },
               "additionalHouseRules": "[]",
               "bookingAvailability": "BookingAvailabilityEnum",
               "whatMoreShouldGuestsKnow": "The apartment has an open pitch for excercise",
               "arriveBefore": "2:00am",
               "arriveAfter": "2:00am",
               "leaveBefore": "12:00pm",
               "minimumStayInNight": 2,
               "maximumStayInNight": 2,
               "amenities": ["61df189eddb5f9eee7322864"]
             }
          }).then((res)=>{
                expect(res.status).to.eq(200)
          })
      
          })
    
    // Invalid Signature
        it('Test the update of Apartment with invalid credentials', () => {
          cy.request({
              method: 'PUT',
              failOnStatusCode: false,
              url: user.aparturl_02,
    
              headers: {
                    "authorization": (Cypress.env('token')) + 'Qgh2'
              },
              body:{
                "address" : {
                     "country" : "Nigeria",
                     "city" : "Lagos",
                     "state": "Lagos",
                     "coordinates" : {
                         "coordinates" : [12,12]
                     }
                 },
               "fees" : {
                     "extraGuestFee" : 1000,
                     "petFee" : 500,
                     "cleaningFee": 1000,
                     "securityDepositFee": 500,
                     "discountOffered": 300
                     
                 },
               "propertyTypeOption": "UniqueSpaceOption",
               "propertyType": "Camper",
               "whatGuestsBook": "EntirePlace",
               "forGuestsOnly": "Yes",
               "bedrooms": 2,
               "numberOfBeds": 2,
               "bedTypes": "KingSize",
               "baths": 3,
               "numberOfAdults": 2,
               "numberOfInfants": 1,
               "numberOfChildren": 2,
               "title": "Luxirous Apartment",
               "basePrice": 20000,
               "description": "string",
               "photos": ["61d8cdd15de219d8f8c4c5a0"],
               "videos": ["61d8cdd15de219d8f8c4c5a0"],
               "allowedOptions":{
                   "petsAllowed" : true,
                   "smokingAllowed" : false,
                   "eventsPartiesAllowed": true
               },
               "additionalHouseRules": "[]",
               "bookingAvailability": "BookingAvailabilityEnum",
               "whatMoreShouldGuestsKnow": "The apartment has an open pitch for excercise",
               "arriveBefore": "2:00am",
               "arriveAfter": "2:00am",
               "leaveBefore": "12:00pm",
               "minimumStayInNight": 2,
               "maximumStayInNight": 2,
               "amenities": ["61df189eddb5f9eee7322864"]
             }
          }).then((res)=>{
                expect(res.status).to.eq(400)
                expect(res.body.error).to.eq('Bad Request')
                expect(res.body.message).to.eq('invalid signature')
          })
      
          })
    
    })

// APARTMENT: Get All APARTMENT BY HOST (GET)
describe('APARTMENT: Get All APARTMENT by Host (GET)', () => {

    it('Get all listed apartment by host', () => {
      cy.request({
          method: 'GET',
          url: user.aparturl_03,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})


// APARTMENT: Get Apartment by ID (GET)
describe('APARTMENT: Get Apartment by ID (GET)', () => {

    it('Get listed Apartment by ID with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.aparturl_04,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})


// APARTMENT: Upload picture of an apartment (POST)
describe('APARTMENT: Upload the picture of an apartment (POST)', () => {

    it('Upload the picture of an apartment with valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.aparturl_05,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})

// APARTMENT: Upload video of an apartment (POST)
describe('APARTMENT: Upload a video of an Apartment (POST)', () => {

    it('Upload the video of an apartment with valid credentials', () => {
      cy.request({
          method: 'POST',
          url: user.aparturl_06,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})
