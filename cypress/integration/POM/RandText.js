/// <reference types="Cypress" />

let randText = ''
let randNumb = ''
let randNumb1 = ''
let randNumb2 = ''
let randNumb3 = ''
let randNumb4 = ''
let randNumb5 = '' 

let mailKey = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++)
    randText+=mailKey.charAt(Math.floor(Math.random() * mailKey.length));
    randNumb+= (Math.floor(Math.random() * 100000000));
    randNumb1+= (Math.floor(Math.random() * 100000000000000));
    randNumb2+= (Math.floor(Math.random() * 100));
    randNumb3+= (Math.floor(Math.random() * 1000));
    randNumb4+= (Math.floor(Math.random() * 10));
    randNumb5+= (Math.floor(Math.random() * 10));

class RandText {
    test = randText + ' ' + randText;
    test2 = randText + randText;
    test3 = randText + 'gwkivx' + 'qafrm';
    test4 = randText;
    testEmail = randText + '@gmail.com';
    phoneNumb = '60' + randNumb;
    cardNumb = '55' + randNumb1;
    cvcNumb = '1' + randNumb2; 
    codeNumb = '900'+ randNumb3;
    feeNumb = '0.0'+ randNumb5;
    yearNumb ='200' + randNumb4
}

export default RandText