const numbers = [10, 15, 20, 25, 30];
// for (const number of numbers){
//     console.log(number);
// }

const bottle ={color : 'yellow', price : 50, isCleaned : true, capacity : 2};

for (const key in bottle){
    console.log(key)
}

// const keys = Object.keys(bottle);
// for (const key of keys){
//     console.log(key, bottle[key])
// }