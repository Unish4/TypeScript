function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

getFirst<string>(["a", "b", "c"]);

console.log(getFirst<number>([1, 2, 3]));

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Unish"));

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

console.log(pair<string, number>("Unish", 20));
