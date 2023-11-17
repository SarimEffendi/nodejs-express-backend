//var = normal javascript variables
// var name = "sarim";
// var age = "21";
// var hasHobbies = true;

//let = changeable variable
// let name = "sarim";
// let age = "21";
// let hasHobbies = true;

//changing the value of the variables
// name = "Muhammad Sarim";
// age = "20";
// hasHobbies = false;

//const = constant unchangeable variable
const name = "sarim";
const age = "20";
const hasHobbies = true;


function summarizeUser(userName, userAge, userHasHobbies) {
    return('My name is ' + userName + ', my age is ' + userAge + ', I have hobbies ' + userHasHobbies);

}

console.log(summarizeUser(name, age, hasHobbies));
