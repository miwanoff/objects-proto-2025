class Dog {
  #age; // private

  constructor(name, breed = "?", age = 0, weight = 0) {
    this.#age = age; // private
    this.name = name; // public
    this.breed = breed; // public
    this.weight = weight; // public
    // this.getAge = () => this.#age;
  }

  get age() {
    return this.#age;
  }
  set age(a) {
    if (a >= 0) {
      this.#age = a;
    } else {
      console.log("Цей собака, очевидно, ще не з'явився на світ...");
    }
  }
}

let fido = new Dog("Fido", "Mixed", 8, 38);
fido.name ="Fido II";
fido.age = 9;
console.log(fido.name, fido.age);
