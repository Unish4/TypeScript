interface User {
  name: string;
  email: string;
}

type User1 = {
  name: string;
  email: string;
};

type ID = number | string;
type Pair = [number, number];

interface Admin extends User {
  role: "admin";
}

const admin: Admin = {
  name: "Admin",
  role: "admin",
  email: "Stasdas",
};

type Status = "active" | "inactive" | "pending";

let s: Status = "active";
s = "inactive";

function getId(id: ID): void {
  if (typeof id === "string") {
    id.toUpperCase();
  } else if (typeof id === "number") {
    id.toFixed(2);
  }
}

interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

type UserWithTimestamps = User & Timestamps;

function format(x: string | number | boolean) {
  if (typeof x === "string") {
    return x.toLowerCase();
  } else if (typeof x === "number") {
    return x.toFixed(2);
  } else {
    return String(x);
  }
}

console.log(format(20.0));
console.log(format("unish"));

interface Dog {
  bark: () => void;
}

interface Cat {
  meow: () => void;
}

function makeSound(animal: Dog | Cat): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

interface SuccessResponse {
  status: "success";
  data: string;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handle(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}

interface readonlyUser {
  readonly id: string;
  name: string;
}

const u: readonlyUser = {
  id: "123",
  name: "Unish",
};

u.name = "Prince";

function userOnline(num: number) {
  if (num) {
    return `Here are ${num} users online`;
  }
  return "Nobody is here ";
}

console.log(userOnline(20));
