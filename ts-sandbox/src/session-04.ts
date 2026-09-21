interface User {
  name: string;
  email: string;
  age: number;
}

type PartialUser = Partial<User>;

const pUser: PartialUser = {
  age: 20,
};

console.log(pUser);

type RequiredUser = Required<User>;

const rUser: RequiredUser = {
  age: 20,
  name: "Unish",
  email: "sth",
};

console.log(rUser);

type PublicUser = Pick<User, "email">;

type UserWithoutAge = Omit<User, "age">;

const uWithoutAge: UserWithoutAge = {
  name: "Unish",
  email: "stha",
};

type Roles = Record<"admin" | "user" | "guest", string[]>;

