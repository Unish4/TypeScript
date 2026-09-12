function add(a: number, b: number): number {
  return a + b;
}

add(2, 2);

function makeName(name: string, lastName: string, midName?: string) {
  return `${name} ${midName} ${lastName}`;
}

makeName("Unish", "Sthapit");

function createUser(name: string, age: number, email?: string): object {
  return { name, age, email };
}

createUser("Unish", 20, "sds");
