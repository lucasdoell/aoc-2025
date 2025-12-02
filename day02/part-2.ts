const input = await Bun.file("day02/data.txt").text();
const ranges = input.split(",");

const setOfInvalidIds = new Set<number>();
let sumOfInvalidIds = 0;

ranges.forEach((range) => {
  const [start, end] = range.split("-");

  for (let i = parseInt(start); i <= parseInt(end); i++) {
    const id = i.toString();
    for (let j = id.length - 1; j > 0; j--) {
      const idToCheck = id
        .substring(0, j)
        .repeat(Math.floor(id.length / id.substring(0, j).length));

      if (id === idToCheck) setOfInvalidIds.add(parseInt(id));
    }
  }
});

setOfInvalidIds.forEach((val) => (sumOfInvalidIds += val));

console.log("The sum of invalid IDs is: ", sumOfInvalidIds);
