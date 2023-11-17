const person = {
    name: 'Sarim',
    age: 21,
    greet(){
        console.log("Hi, i am " + this.name + " and i am " + this.age + " years old");
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }
// printName(person);

//destructuring

const printName = ({name}) => {
    console.log(name)
}
printName(person);

//name should be same in object
const {name,age}=person;
console.log(name,age)

const hobbies = ["Sports","Cooking"];

const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2)