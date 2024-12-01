import { first } from './day1.input.mjs';
import { second } from './day1.input.mjs';

first.sort((a, b) => a - b);
second.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < first.length; i++) {
    sum = sum + Math.abs(first[i] - second[i]);
}
console.log(sum);
