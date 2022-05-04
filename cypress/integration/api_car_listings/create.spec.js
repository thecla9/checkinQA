/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    carcrturl_01:   ("/car-listing/create")
};
  
// ACCOUNT: Create Account with Valid Credentails
describe('CAR LISTINGS: Create (POST)', () => {

    it('Create Car Listing with Valid Credentails', () => {
        cy.request({
              method: 'POST',
            url: user.carcrturl_01,

            headers: {
                "authorization": (Cypress.env('token')),
                "content-type": "application/json"
          },
            body: {
                
                "address" : {
                    "address" : "lekki phase 1, Lagos",
                    "country" : "Nigeria",
                    "city" : "Lagos",
                    "state": "Lagos",
                    "coordinates": [
                        6.429123199999999,
                        3.4238028
                        ]
                },
                "carVin" : {
                    "value": "1234"
                },
                "carModel": "61d8cdd15de219d8f8c4c5a0",
                "carMake":"61d8cdd15de219d8f8c4c5a0",
                "carYear" : "2008",
                "carTransmission" : "Automatic",
                "carMileage" : "61d8cdd15de219d8f8c4c5a0",
                "driversLicense": "61d8cdd15de219d8f8c4c5a0",
                "carTrim": "61d8cdd15de219d8f8c4c5a0",
                "carStyle": "61d8cdd15de219d8f8c4c5a0",
                "images" : ["61d8cdd15de219d8f8c4c5a0"],
                "videos" : ["61d8cdd15de219d8f8c4c5a0"],
                "advanceNoticeBeforePickupInHours" : "None",
                "minimumTripDurationInDays" : 1,
                "maximumTripDurationInDays": 2,
                "bookingAvailabilityInMonths" : 1,
                "amenities" : ["61d8cdd15de219d8f8c4c5a0"],
                "carDiscliamer" : ["61d8cdd15de219d8f8c4c5a0"],
                "carDescription" : "this is a light car with all the amenities needed",
                "carLicensePlateNumber" : varText.phoneNumb+varText.test,
                "carIssuedState": {
                    "address": "lekki phase 1, lagos",
                    "country" : "Nigeria",
                    "city" : "Lagos",
                    "state": "Lagos",
                        "coordinates" : [12,12]
                },
                "advanceNoticeBeforePickup" : "None",
                "basePrice" : 2200,
                "requiresApprovalBeforeBookingConfirmation" : false,
                "fees" : {
                    "delivery" : 20,
                    "cleaning" : 20,
                    "securityDeposit" : 20
                },
                "numberOfSeats": 4,
                "numberOfDoors" : 4

            }
        }).then((res)=>{
            cy.log(varText.phoneNumb+varText.test4)
              expect(res.status).to.eq(201)
        })
  });

})