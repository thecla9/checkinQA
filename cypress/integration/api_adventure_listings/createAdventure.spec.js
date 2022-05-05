/// <reference types="Cypress" />


const user = { 
    crtadvurl_01:   ("/adventure-listing/create"),
    crtadvurl_02:   ("/adventure-listing/"),
};

 
describe('ADVENTURE: Create', () => {

    it('Create Adventure', () => {
        cy.request({
              method: 'POST',
            url: user.crtadvurl_01,
  
            headers: {
              "authorization": (Cypress.env('token')),
              "content-type": "application/json"
        },
            body: {
                "adventureType":"62540f0d5f40b43d6ad1bb42",
               "address" : {
                   "country" : "Nigeria",
                   "city" : "Lagos",
                   "state": "Lagos",
                   "coordinates" : [-122.288818,37.598167] 
               },
             
             "fees" : {
                   "extraGuestFee" : 200,
                   "petFee" : 500,
                   "cleaningFee": 200,
                   "securityDepositFee": 200,
                   "discountOffered": 300     
               },
             "title": "string",
             "description": "string",
             "amenities": ["6204126f8891dd20081bbfc3"],
             "listingHighlights": "string",
             "photos": ["6204120d8891dd20081bbfbf","6204120d8891dd20081bbfc0"],
             "videos": ["6204120d8891dd20081bbfbf","6204120d8891dd20081bbfc0"],
             "mobileTicketing": "string",
             "duration": "string",
             "confirmation": "string",
             "pickUpIncluded": "string",
             "smallGroupLimit": 3,
             "language": ["6204101b8891dd20081bbfbb"],
             "additionalHouseRules": "string",
             "whatMoreShouldGuestsKnow": "string",
             "bookingAvailability": "Two",
             "arriveBefore": "string",
             "arriveAfter": "string",
             "leaveBefore": "string",
             "minimumGuest": 2,
             "maximumGuest": 2,
             "minimumStayInNight": 2,
             "maximumStayInNight": 2,
             "basePrice": 50000,
             "discountOffered": 1000,
             "extraGuestFee": 2000,
             "bookingStatus":"UnBooked",
             "countTimesBooked":0
             
           }
        }).then((res)=>{
          const userId = res.body.adventure.id
          const userHost = res.body.adventure.host
              cy.wrap(userId).as('id')
              cy.wrap(userHost).as('host')
              expect(res.status).to.eq(201)
        })
  });


  it('Get adventure by ID with valid credentials', function () {
    cy.request({
        method: 'GET',
        url: user.crtadvurl_02+this.id,

        headers: {
              "authorization": (Cypress.env('token'))
        }
    }).then((res)=>{
          // cy.log(this.id)
          expect(res.status).to.eq(200)
    })

    })

  it('Get adventure by ID with invalid credentials', function () {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: user.crtadvurl_02+this.id,

        headers: {
              "authorization": (Cypress.env('token')+'Gwre')
        }
    }).then((res)=>{
          // cy.log(this.id)
          expect(res.status).to.eq(400)
          expect(res.body.error).to.eq('Bad Request')
    })

    })

  it('Get adventure listing by host with valid credentials', function () {
    cy.request({
        method: 'GET',
        url: user.crtadvurl_02+this.host,

        headers: {
              "authorization": (Cypress.env('token'))
        }
    }).then((res)=>{
          // cy.log(this.host)
          expect(res.status).to.eq(200)
    })

    })

    it('Get adventure listing by host with invalid credentials', function () {
      cy.request({
          method: 'GET',
          failOnStatusCode: false,
          url: user.crtadvurl_02+this.host,
  
          headers: {
                "authorization": (Cypress.env('token')+'Gwre')
          }
      }).then((res)=>{
            // cy.log(this.id)
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
      })
  
      })

})