'use strict';

function ipNums (ip = "100.20.9.6"){
    const parts = ip.split('.');
    const number = parts.map(Number);
    if (parts.length !== 4) {
        return "fail.";
    }

    const prefinal = number.reduce((sum, byte, i) => sum + byte * (256 ** (3 - i)), 0);

    return prefinal;
}

console.log (ipNums('123.34.9.6'));