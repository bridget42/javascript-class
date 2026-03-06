// test.mjs - Test the ES6 module exports
import human, { add, PI } from './file1.mjs';

console.log('Default export (human):', human);
console.log('PI:', PI);
console.log('add(5, 3):', add(5, 3));