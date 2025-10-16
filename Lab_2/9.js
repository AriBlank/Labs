'use strict';

let obj1 = {name: 'Miku', number:'111-888-333'};
let obj2 = {name: 'Ahri', number:'111-555-333'};
let obj3 = {name: 'Jill', number:'111-000-333'};
let array = [obj1, obj2, obj3];

function findPhoneByName(name) {
    for(let item of array) {
        if (item.name === name){
            console.log (item.number);
        }
    }
}
findPhoneByName('Miku');
findPhoneByName('Jill');
findPhoneByName('Ahri');

