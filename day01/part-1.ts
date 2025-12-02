// The dial ranges from 0-99
const DIAL_STARTING_POS = 50;
let countOfZeroes = 0; // this is the password
let currentPos = DIAL_STARTING_POS;

const input = await Bun.file("day01/data.txt").text();
const values = input.split("\n");

// if dial is 0 and moves to the left 1:
// -1 -> 100 + -1 (res) -> 99
// if dial is 99 and moves to the right 1:
// 100 -> 100 (res) - 100 -> 0
// if the dial moves more than 100 turns:
// get the remainder of turns mod 100 and follow the above

values.forEach((val) => {
  console.log(val);
  const direction = val[0] as "L" | "R";
  const turns = parseInt(val.slice(1));

  if (direction === "L") {
    currentPos -= turns % 100;
  } else {
    currentPos += turns % 100;
  }

  if (currentPos > 99) currentPos -= 100;
  if (currentPos < 0) currentPos += 100;

  if (currentPos === 0) countOfZeroes++;
});

console.log("The password is: ", countOfZeroes);
