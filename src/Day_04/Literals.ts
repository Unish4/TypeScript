let direc: "north" | "south" | "west" | "east";
// direc = "east"

enum Sizee {
  Small,
  Medium,
  Large,
}

var size: Sizee = 0;

if (size === Sizee.Small) {
  console.log("Small");
} else if (size === Sizee.Medium) {
  console.log("Large");
}

enum Direc {
  Up = "UP",
  Down = "Down",
  left = "Left",
  right = "Right",
}

let dir: Direc = Direc.Down;

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

diceRoll = 1;
diceRoll = 2;
let succCode: 200 | 201 | 204;
succCode = 204;


