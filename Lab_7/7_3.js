'use strict';
const result = [2, 1, 1, 3, 2];
function unique (array){
    return array.filter((item, index, self) => {
        return self.indexOf(item) === index;
    });
}
console.log(unique(result));