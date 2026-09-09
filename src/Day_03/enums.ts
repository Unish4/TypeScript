enum Direction1 {
  North,
  East,
  West,
  South,
}

console.log(Direction1.East);
console.log(Direction1.West);

let myDirection: Direction1 = Direction1.East;

enum StatusCode {
    OK = 200,
    Created= 201,
    BadRequest= 400,
    NotFound = 404,
    ServerError = 500 
}

console.log(StatusCode.Created)
