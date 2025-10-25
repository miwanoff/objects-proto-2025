function Dog(name, breed = "?", age = 0, weight = 0) {
  this.name = name;
  this.breed = breed;
  let age_ = age;
  this.bark = function () {
    alert(this.name + " сказав Гав!");
  };
  this.setAge = function (a) {
    if (a >= 0) {
      age_ = a;
    } else {
      alert("Цей собака, очевидно, ще не з'явився на світ...");
    }
  };

  this.getAge = function () {
    return age_;
  };
}

let fido = new Dog("Fido", "Mixed", 8, 38);
let fluffy = new Dog("Fluffy", "Poodle", 3, 12);
let spot = new Dog("Spot", "Chihuahua", 1, 3);
let rex = new Dog("Rex", "bolonka", 4, 4);
let dola = new Dog("Dola", "taxa", 6, 8);
// console.log(fido.age);
// fido.age_ = -8;
fido.setAge(-9);

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
  if (dogs[i] instanceof Dog) {
    alert(dogs[i].name, dogs[i].breed, dogs[i].getAge());
    dogs[i].bark();
  }
}
