/// <reference types="Cypress" />

let randText = ''
let randNumb = ''
let randNumber = ''
let randNum = ''
let randNumbe = ''

let mailKey = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++)
    randText+=mailKey.charAt(Math.floor(Math.random() * mailKey.length));
    randNumb+= (Math.floor(Math.random() * 100000000));
    randNumber+= (Math.floor(Math.random() * 100000000000000));
    randNum+= (Math.floor(Math.random() * 100));
    randNumbe+= (Math.floor(Math.random() * 1000));



class RandText {
    test = randText + ' ' + randText;
    test2 = randText + randText;
    test3 = randText + 'gwkivx' + 'qafrm';
    test4 = randText;
    testEmail = randText + '@gmail.com';
    phoneNumb = '60' + randNumb;
    cardNumb = '55' + randNumber;
    cvcNumb = '1' + randNum; 
    codeNumb = '900'+ randNumbe;
  
}

export default RandText