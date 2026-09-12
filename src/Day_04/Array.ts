let numbers: number[] = [1, 2, 3];
let string: string[] = ["Unish", "Prince"];
let boolean: boolean[] = [true, false, true];

let scores: Array<string> = ["Prince", "Unish"];
let number: Array<number> = [1, 2, 3];

let mixedArray: (string | number)[] = [2, "Unish"];

let stringOrNumberss: string[] | number[];
stringOrNumberss = ["Unish", "Prince"];
stringOrNumberss = [1, 2, 3];

let users: { name: string; age: number }[] = [
  { name: "Unish", age: 20 },
  { name: "Prince", age: 21 },
];

interface User22 {
    name: string;
    age: number;
    email? : string
}

let user: User22[] = [
    {name : "Natsu", age: 21, email: "Ssh"}
] 

let readOnNumber : readonly number[] = [1,2,3]
let readonlyString: readonly string[] = ["Cannot", "Be", "Changed"]

let constArray = ["Red", "Green"] as const