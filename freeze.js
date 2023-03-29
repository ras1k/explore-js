const bottle ={color : 'yellow', price : 50, isCleaned : true, capacity : 2};

const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);

Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);