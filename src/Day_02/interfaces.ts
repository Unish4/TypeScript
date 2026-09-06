interface User1 {
  name: string;
  age: number;
  email?: string;
}

const user12: User1 = {
  name: "Unish",
  age: 20,
};

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  salary: number;
  isAdmin: boolean;
}

const emp1: Employee = {
  name: "Prince",
  employeeId: 44,
  salary: 40000,
  age: 22,
  isAdmin: false,
};
