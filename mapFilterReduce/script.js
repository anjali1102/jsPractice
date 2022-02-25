/**
// map, reduce and filter

// ----------------------------- MAP -----------------------
const arr = [5, 1, 3, 2, 6];

// Double - [10,2,6,4,12]

function double(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);

const op2 = arr.map((x) => x * 21);


console.log(output);
console.log(op2);

// -------------------------- FILTER ----------------------

// filter odd values
function isOdd(x) {
    return x > 4;
}

const op3 = arr.filter(isOdd);

console.log(op3);

// ----------------------------- REDUCE --------------------

// to find sum or max number

const output4 = arr.reduce((acc, cur) => {
    return acc = acc + cur;
}, 0);
// 0 is the second parameter of the reduce function,
//  it is the initial value of accumulator

const op5 = arr.reduce((acc, cur) => {
    return (cur > acc ? acc = cur : acc = acc);
}, 0)

// printing on console
console.log(output4);
console.log(op5);


*/

/*
// ------------------------------------- Functional Programming exercises
// map, filter, reduce.

arr = [1, 3, 5, 2, 22, 11, 9];

// ------------------------------------
const oddNumber = (sum, cur) => {
    cur % 2 === 0 ? cur : sum += cur
    return sum;
};


// -------------------------------------
var evenSum = 0, oddSum = 0;
const oddNumberObj = (sum, cur) => {
    cur % 2 === 0 ? evenSum += cur : oddSum += cur;
    return { oddSum, evenSum };
}

const isOdd = arr.reduce(oddNumberObj);
console.log(isOdd);

*/


/**

// ------------------------- Find the biggest number in the array

// Given an array.
// Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]



// ------------------------- class akanksha
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const arrNew = arr.map(num => num % 2 === 0 ? num += 1 : num);
console.log(arrNew);



const arr = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]


// Your output should be: 121

arrAge = arr.reduce((sum, cur) => sum += cur.age, 0);
console.log(arrAge);



const family = [
    {
        name: 'Tanay',
        haveCycle: true
    },
    {
        name: 'Akanksha',
        haveCycle: false
    },
    {
        name: 'Tanvi',
        haveCycle: true
    },
    {
        name: 'Kanak',
        haveCycle: false
    }
];


const cycleOwner = family.filter(obj => {
    obj.haveCycle ?  )
console.log(cycleOwner);



const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// { '0': "You", '1': "all", '2': "are", '3': "rockstars" }



const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]


// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const stre = arr.join("-");
console.log(stre);


*/


// ------------------------------------------ Js practice- map, filter, reduce 9th Feb 2022.

/*

// Q1 Array Squared


const input = [1, 2, 3, 4, 5];


const inputSq = input.map(num => num * num);
console.log(inputSq);




// Q2 sum of +ve element

const input = [1, -4, 12, 0, -3, 29, -150];

const sumInput = input.reduce((sum, cur) => {
    cur > 0 ? sum += cur : cur
    return sum
}, 0);

console.log(sumInput);





// Q3 Calculate median and mean
const input = [12, 46, 32, 64];

const inputMedian = input.reduce((acc, cur, index, arr) => {

    acc.mean += cur / arr.length;
    index === arr.length / 2 ? acc.median = cur : cur;

    return acc;

}, { mean: 0, median: 0 });

console.log(inputMedian);




// Q4 Get name initials

const input = 'George Raymond Richard Martin';

const initials = input.split(" ").map(word => word[0]).join('');
console.log(initials);



// Age difference from youngest to oldest

const input = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];


const youngOld = input.map(obj => obj.age);
const sol = [Math.min(...youngOld), Math.max(...youngOld), Math.max(...youngOld) - Math.min(...youngOld)];

console.log(youngOld);
console.log(sol);




// Q.) Numeronyms

const input = 'Every developer likes to mix kubernetes and javascript';
const createNnumeronyms = word => word[0] + (word.length - 2) + word[word.length - 1];

const numeronyms = input
    .split(' ')
    .map(word => word.length > 4 ? createNnumeronyms(word) : word)
    .join('  ');

console.log(numeronyms);



// n! with map and reduce
// hint : map, fill, reduce.

const input = 6;

const arr = new Array(input)
    .fill(0)
    .map((curVal, index) => index + 1)
    .reduce((acc, curVal) => acc * curVal);


console.log(arr);



// Q) Count elements in array of arrays

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];

const totalElements = input
    .flat()
    .reduce((acc, cur) => {
        if (acc[cur]) { acc[cur] += 1; }
        else { acc[cur] = 1; }

        return acc;
    }, {});

console.log(totalElements);




// Q) Flatten an array without using flat().


const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const inputFlat = [...input[0], ...input[1], ...input[2]];

console.log(inputFlat);

// Q) count occurances of the flat array

const occurFlat = inputFlat.reduce((acc, cur) => {
    acc[cur] ? acc[cur] += 1 : acc[cur] = 1;

    return acc;
}, {});

console.log(occurFlat);


*/



// # Initial State: { passwordsMatch: false }

// # Initial View
//     - passwordsMatch ? if no, then keep error hidden, else show error.
// - View: error show


// #  Event
//     - Read Input.
// - Use that Input to match password.

// # new state
//     - if passwordsMatch then set state to { passwordMatch : true }

// # new view
//     -passwordMatch ? if yes, then keep error hidden, else show error.
// - View: Show passwords match.