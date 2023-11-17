const person = {
    name: 'Sarim',
    age: 21,
    greet(){
        console.log("Hi, i am " + this.name + " and i am " + this.age + " years old");
    }
};

console.log(person);
person.greet();