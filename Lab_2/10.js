'use strict';

let phoneBook = {
    'Miku' : '111-888-333',
    'Ahri' : '111-555-333',
    'Jill' : '111-000-333'
}
 function findPhoneByName (name) {
    console.log(phoneBook[name])
 }

 findPhoneByName('Miku')
 findPhoneByName('Jill');
 findPhoneByName('Ahri');