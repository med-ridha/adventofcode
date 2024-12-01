import { first } from './day1.input.mjs';
import { second } from './day1.input.mjs';

first.sort((a, b) => a - b);
second.sort((a, b) => a - b);
let secondhash = {};

for (let i = 0; i < second.length; i++) {
    if (secondhash[second[i]] === undefined) {
        secondhash[second[i]] = 1;
    } else {
        secondhash[second[i]] += 1;
    }
}

let sum = 0;
for (let i = 0; i < first.length; i++) {
    if (secondhash[first[i]] === undefined) {
        sum = sum + (Math.abs(first[i]) * 0);
    } else {
        sum = sum + (Math.abs(first[i]) * secondhash[first[i]]);
    }
}
console.log(sum);

