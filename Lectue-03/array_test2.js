let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2,true,'Apple'];
let value3 = ['Mars',9,'Apple',1];

const fil = value1.filter(item => value2.includes(item) || value3.includes(item));
console.log(fil);