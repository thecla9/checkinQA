/// <reference types="Cypress" />


const user = { 
    lgnurl_01:   ("/account/login")
};
   
// Login
it('Login', () => {
      cy.request({
            method: 'POST',
          url: user.lgnurl_01,

          body: {
            "emailOrPhoneNumber":"p.ugah.pu@gmail.com",
            "password":"Go@12345",
            "accountAccessMedium" : "Web",
            "deviceRegistrationToken" : "null",
            "deviceId" : "null"
          }
      }).then((res)=>{
            expect(res.status).to.eq(201)
      })
});