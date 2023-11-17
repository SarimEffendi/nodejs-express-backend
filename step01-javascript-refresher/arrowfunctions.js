// Traditional function expression
let addTraditional = function (a, b) {
    return a + b;
};

// Arrow function
let addArrow = (a, b) => a + b;


console.log(addTraditional(5, 3));
console.log(addArrow(5, 3));

//single parameter
const addOne = a => a + 1;
console.log(addOne(1));

//without paramaters
const addRandom = ()=> 1+2;
console.log(addRandom());

// Traditional function expression with Array.map
let numbers = [1, 2, 3, 4, 5];
let squaredTraditional = numbers.map(function (num) {
    return num * num;
});

// Arrow function with Array.map
let squaredArrow = numbers.map(num => num * num);


console.log(squaredTraditional);
console.log(squaredArrow);       
