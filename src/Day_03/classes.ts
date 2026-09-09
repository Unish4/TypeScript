class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello I m ${this.name} and i m ${this.age} `;
  }
}

let person1 = new Person("Unish", 20);

console.log(person1.greet());

class User3 {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

let user22 = new User3("Unish", "Sthapitunish@gmail.com", 20);
