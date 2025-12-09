'use strict';

function fn() {
    const object = {name: 'AppleJack'};
    let object1 = {name: 'ApplePay'};

    object.name = 'PinkiePie';
    object1.name = 'Rarity';

    console.log (object, object1);

    object1 = {name: 'Fluttershy'};

    console.log(object1);
}
fn();
