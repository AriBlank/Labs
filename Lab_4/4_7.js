'use strict';

const persons = {
  noname: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = {};
for (let human in persons) {
    const info = persons[human];
    const age = info.died - info.born;
    ages[human] = age;
}

console.log(ages);