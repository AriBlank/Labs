'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey (length, characters){
    let final = '';
    const charlen = characters.length;
    for (let i = 0; i < length; i++ ) {
        const randIndex = Math.floor(Math.random() * charlen);
        final += characters[randIndex];
    }
    return final;
}
console.log (generateKey(12, characters));