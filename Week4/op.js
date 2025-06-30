// five ways of creating objects
// {} or object literals
/*const myObject = {
  property1: "value1",
  property2: "value2",
  method1: function () {
    console.log("hello from method1");
  },
};*/
// console.log(Object.getPrototypeOf(myObject));
// Using Object.create method()
const animal = {
  sound: "animal sound",
  makeSound: function () {
    console.log(this.sound);
  },
  /*makeSounds() {
    return `This is ${this.sound} `;
  },*/
};
const dog = Object.create(animal);
dog.sound = "hoof";
dog.makeSound();
console.log(dog);
// Using the constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}
const person1 = new Person("Haydar", 21);
const person2 = new Person("Blaire", 30);
const person3 = new Person("Joshua", 19);
const person4 = new Person("Monica", 23);
console.log(person1);
person1.greet();

// Using ES6 classes

const car1 = new Car("Range Rover", "sport");
const car2 = new Car("Toyota", "Harrier");
const car3 = new Car("Bugatti", "Chiron");
console.log(car3);
// Factory function - we use a function to return an object
function createProduct(name, price) {
  return {
    name: name,
    price: price,
    dispatchEvent() {},
  };
}

// inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
let daisy = new Dog("Daisy");
daisy.speak(); // Output: Daisy barks
// polyphorsim
// methods of the class got the same class but behave differently
class User {
  Login() {
    console.log(`user logged in`);
  }
}
class Host extends User {
  Login() {
    console.log(` Admin allowed to have more privilleges`);
  }
}
let henry = new Host();
henry.Login(); // Output: Admin allowed to have more privilleges
// this is an abstract class because the make and model are not actual values
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`${this.make} is starting`);
  }
}
