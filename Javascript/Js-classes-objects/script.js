// let obj = {
//     a: 1,
//     b: "Ammar"
// }
// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...");
    }
    eats() {
        console.log('Khaa rha hoo');
    }
    jumps() {
        console.log('kood rha hoo');
    }
}

// inheritance
class Lion extends Animal {
    constructor(name) {
        // calling super class constructor by super keyword 
        super(name);
        console.log("Object is created and this is a lion...");
    }
    // method overriding 
    eats() {
        super.eats();
        console.log('Khaa rha hoo roar');
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera")
console.log(l);

console.log(a instanceof Lion);
console.log(l instanceof Animal);
