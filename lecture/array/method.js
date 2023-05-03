const memory = ['Wednesday','sunny',7,2.009];
console.log(memory.join());
console.log("the date is the",memory.indexOf('Wednesday'),"+1th element");

memory.copyWithin(3,0);
console.log(memory);
memory.copyWithin(2,0,2);
console.log(memory);