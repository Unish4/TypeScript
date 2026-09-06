type User = {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
};

const user1 = {
  id: 1,
  name: "Unish",
  email: "sthapitunish@gmail.com",
  createdAt: new Date(),
};

console.log(user1);

