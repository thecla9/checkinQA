/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    anemurl_01:   ("/amenities"),
    anemurl_02:   ("/amenities/get-all?=Apartment"),
    anemurl_03:   ("/amenities/61df189eddb5f9eee7322864?=1"),
    anemurl_04:   ("/amenities/get-all-amenities-by-service-type/ApartmentHosting"),
    anemurl_05:   ("/amenities/61df189eddb5f9eee7322864"),
};



// AMENITIES: Create (POST)
describe('AMENITIES: Create Amenities (POST)', () => {
// Valid Credentials
    it('Test the creation of Amenities with valid credentials', function () {
      
      cy.request({
          method: 'POST',
          url: user.anemurl_01,

          headers: {
                "authorization": (Cypress.env('token'))
          },
          body: {
            "name": varText.test,
            "createdBy" : "John Doe",
            "services":"ApartmentListing",
            "createdByAccountType":"CheckInStaff"
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
  
      })

// Invalid Credential
    it('Test the creation of Amenities with invalid credentials', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.anemurl_01,

          headers: {
                "authorization": (Cypress.env('token')+'Ghwk')
          },
          body: {
            "name": varText.test,
            "createdBy" : "John Doe",
            "services":"ApartmentListing",
            "createdByAccountType":"CheckInStaff"
          }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
            expect(res.body.message).to.eq('invalid signature')
      })
  
      })

// Existing Credential
    it('Test the creation of Amenities with existing credentials', () => {
      cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.anemurl_01,

          headers: {
                "authorization": (Cypress.env('token'))
          },
          body: {
            "name": varText.test,
            "createdBy" : "John Doe",
            "services":"ApartmentListing",
            "createdByAccountType":"CheckInStaff"
          }
      }).then((res)=>{
            expect(res.status).to.eq(409)
            expect(res.body.error).to.eq('Conflict')
            expect(res.body.message).to.eq('Sorry this Amenities is already added to our system')
      })
  
      })

})


// AMENITIES: Get All Amenities (GET)
describe('AMENITIES: Get All Amenities (GET)', () => {

    it('Get all listed Amenities', () => {
      cy.request({
          method: 'GET',
          url: user.anemurl_02,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})


// AMENITIES: Get Amenities by ID (GET)
describe('AMENITIES: Get Amenities by ID (GET)', () => {

    it('Get listed Amenities by ID with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.anemurl_03,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})


// AMENITIES: Get Amenities by Service Type (GET)
describe('AMENITIES: Get Amenities by Service Type (GET)', () => {

    it('Get listed Amenities by service type with valid credentials', () => {
      cy.request({
          method: 'GET',
          url: user.anemurl_04,

          headers: {
                "authorization": (Cypress.env('token'))
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

})


// AMENITIES: Update Amenities (PUT)
describe('AMENITIES: Update Amenities (PUT)', () => {

// Valid Signature
    it('Test the update of Amenities with valid credentials', () => {
      cy.request({
          method: 'PUT',
          url: user.anemurl_05,

          headers: {
                "authorization": (Cypress.env('token'))
          },
          body: {
            "name": varText.test2,
            "createdBy" : "John Doe",
            "services":"ApartmentListing",
            "createdByAccountType":"CheckInStaff"
          }
      }).then((res)=>{
            expect(res.status).to.eq(200)
      })
  
      })

// Invalid Signature
    it('Test the update of Amenities with invalid credentials', () => {
      cy.request({
          method: 'PUT',
          failOnStatusCode: false,
          url: user.anemurl_05,

          headers: {
                "authorization": (Cypress.env('token')) + 'Qgh2'
          },
          body: {
            "name": varText.test2,
            "createdBy" : "John Doe",
            "services":"ApartmentListing",
            "createdByAccountType":"CheckInStaff"
          }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
            expect(res.body.message).to.eq('invalid signature')
      })
  
      })

})