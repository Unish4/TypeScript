type RoleCounts = Record<"admin" | "user" | "guest", number>;

const counts: RoleCounts = {
  admin: 2,
  guest: 0,
  user: 1,
};

type ErrorMessage = Record<number, string>;

const error: ErrorMessage = {
  400: "Bad Request",
  401: "Unauthorized",
};


