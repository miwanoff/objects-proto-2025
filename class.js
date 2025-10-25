class Dog {
            #age;

            constructor(firstName, lastName, age) {
                this.#age = age;
                this.firstName = firstName;
                this.lastName = lastName;
                // this.getAge = () => this.#age;
            }

            get getAge() {
                return this.#age;
            }

            get fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        }