let username: string = "Unish";
username = "Prince";
// username = 2

let age: number = 22;
let isActive: boolean = true;
let favoriteColor: null = null;
let nickName: undefined = undefined;

function unsafeProcess(data: any): string {
  return data.toUpperCase();
}

function safeProcess(data: unknown): string {
  if (typeof data === "string") {
    return data.toLowerCase();
  }
  return "";
}

console.log(safeProcess("Unish"));
console.log(safeProcess(22));

function crash(message: string): never {
  throw new Error(message);
}

type Shape = "circle" | "square" | "rectangle";

function describeShape(shape: Shape): string {
  switch (shape) {
    case "circle":
      return "Round";
    case "rectangle":
      return "Pointy";
    case "square":
      return "Boxy";
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

console.log(describeShape("circle"));

function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Unish"));
// console.log(greet(1));

function isEven(n: number): boolean {
  return n % 2 === 0 ? true : false;
}

// function sum(numbers: number[]): number {
//   return;
// }
