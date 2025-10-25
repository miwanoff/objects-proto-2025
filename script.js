function Dog(name, breed = "?", age = 0, weight = 0) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.bark = function () {
    alert(this.name + " сказав Гав!");
  };
}

let fido = new Dog("Fido", "Mixed", 8, 38);
let fluffy = new Dog("Fluffy", "Poodle", 3, 12);
let spot = new Dog("Spot", "Chihuahua", 1, 3);
let rex = new Dog("Rex", "bolonka", 4, 4);
let dola = new Dog("Dola", "taxa", 6, 8);
// console.log(fido.age);
// fido.age = 8;

// let dog = {
//   name: "Rex",
//   age: 15,
//   breed: "bolonka",
// };

// let dog1 = {
//   name: "Dola",
//   age: 15,
//   breed: "taxa",
// };

let dogs = [fido, fluffy, spot, rex, dola];
for (let i = 0; i < dogs.length; i++) {
  alert(dogs[i].name, dogs[i].breed, dogs[i].age);
  dogs[i].bark();
}
