function parse(input: string): string;
function parse(input: number): number;
function parse(input: string | number): string | number {
  return input;
}

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

first([1, 2, 3, 4]);
first(["1", "2"]);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair(1, "Unish");
pair("Unish", 2);

interface Box<T> {
  value: T;
}

const numBox: Box<number> = { value: 22 };
const strBox: Box<string> = { value: "Unish" };

function getLength<T extends { length: number }>(x: T): number {
  return x.length;
}

getLength("hello")

interface User {
  name: string;
  email: string;
  bio?: string;
}

type UserKeys = keyof User;

const u: UserKeys = "bio"

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;

function last<T>(arr: T[]): T | undefined {
  return arr.length === 0 ? undefined : arr[arr.length - 1];
}

console.log(last([1, 2, 3]));
