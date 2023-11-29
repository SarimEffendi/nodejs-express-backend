const hobbies =["Sports", "Cooking"];

const person = {
    name: 'Sarim',
    age: 21,
    greet(){
        console.log("Hi, i am " + this.name + " and i am " + this.age + " years old");
    }
};

const copiedPerson = {...person}
console.log(copiedPerson);
const copiedArray = [...hobbies];
console.log(copiedArray);

//rest operator
// const toArray=(arg1,arg2,arg3)=>{
//     return [arg1,arg2,arg3]
// }
// console.log(toArray(1,2,3,4));

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4));
