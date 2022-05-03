/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crturl_01:   ("/account")
};
  
// ACCOUNT: Create Account with Valid Credentails
describe('ACCOUNT: Create Account (POST)', () => {

    it.only('Create Account with Valid Credentails', () => {
        cy.request({
              method: 'POST',
            url: user.crturl_01,
  
            body: {
                "email": varText.testEmail,
                "password":"Web@12345",
                "firstName" : "Jane",
                    "lastName" : "Doe",
                    "phoneNumber" : {
                        "code" : "+234",
                        "number" : varText.phoneNumb
                    },
                    "accountAccessMedium": "Web"
            }
        }).then((res)=>{
            // cy.log(varText.testEmail)
              expect(res.status).to.eq(201)
        })
  });


    it.only('Create Account with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crturl_01,
  
            body: {
                "email": "jane#gmail.com",
                "password":"Web@12345",
                "firstName" : "Jane",
                    "lastName" : "Doe",
                    "phoneNumber" : {
                        "code" : "+234",
                        "number" : varText.phoneNumb
                    },
                    "accountAccessMedium": "Web"
            }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
              expect(res.body.message).to.eq('\"email\" must be a valid email')
        })
  });


    it.only('Test Account Creation using invalid Phone Number', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crturl_01,
  
            body: {
                "email": "jane#gmail.com",
                "password":"Web@12345",
                "firstName" : "Jane",
                    "lastName" : "Doe",
                    "phoneNumber" : {
                        "code" : "+234",
                        "number" : varText.phoneNumb+'qwe'
                    },
                    "accountAccessMedium": "Web"
            }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Unauthorized')
        })
  });

})