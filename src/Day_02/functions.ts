function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 4));

function isAdult(age: number): boolean {
  return age >= 19;
}

const greetUser = (name: string, title?: string) : string => {
    if(title) {
        return `${title} ${name}`
    }
    return name
}

greetUser("Unish", "Er");