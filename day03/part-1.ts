const input = await Bun.file("day03/data.txt").text();
const batteryBanks = input
  .split("\n")
  .map((bank) => bank.split("").map(Number));

let sumOfJoltages = 0;

batteryBanks.forEach((bank) => {
  let largestNum = Math.max(...bank);

  const largestIndex = bank.findIndex((val) => val === largestNum);
  let secondLargest = 0;

  if (largestIndex === bank.length - 1) {
    const bankWithoutLargest = bank.slice(0, bank.length - 1);
    secondLargest = largestNum;
    largestNum = Math.max(...bankWithoutLargest);
  } else {
    const bankFromLargest = bank.slice(largestIndex + 1);
    secondLargest = Math.max(...bankFromLargest);
  }

  sumOfJoltages += largestNum * 10 + secondLargest;
});

console.log("Sum of joltages: ", sumOfJoltages);
