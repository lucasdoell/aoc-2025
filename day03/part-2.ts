const input = await Bun.file("day03/data.txt").text();
const batteryBanks = input
  .split("\n")
  .map((bank) => bank.split("").map(Number));

function findMaxJoltage(bank: number[], selectCount: number) {
  const result: number[] = [];
  let startPos = 0;

  for (let i = 0; i < selectCount; i++) {
    const remaining = selectCount - i;
    const searchEnd = bank.length - remaining + 1;

    let maxDigit = -1;
    let maxPos = startPos;

    for (let j = startPos; j < searchEnd; j++) {
      if (bank[j] > maxDigit) {
        maxDigit = bank[j];
        maxPos = j;
      }
    }

    result.push(maxDigit);
    startPos = maxPos + 1;
  }

  return Number(result.join(""));
}

let sumOfJoltages = 0;

batteryBanks.forEach((bank) => {
  sumOfJoltages += findMaxJoltage(bank, 12);
});

console.log("Sum of joltages:", sumOfJoltages);
