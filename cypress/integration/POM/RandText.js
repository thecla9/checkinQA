/// <reference types="Cypress" />

let randText = ''
let randNumb = ''
let mailKey = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++)
    randText+=mailKey.charAt(Math.floor(Math.random() * mailKey.length));
    randNumb+= (Math.floor(Math.random() * 100000000));


class RandText {
    test = randText + ' ' + randText;
    test2 = randText + randText;
    test3 = randText + 'gwkivx' + 'qafrm';
    test4 = randText;
    testEmail = randText + '@gmail.com';
    phoneNumb = '80' + randNumb;
}

export default RandText