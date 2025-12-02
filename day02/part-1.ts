const input = await Bun.file("day02/data.txt").text();
const ranges = input.split(",");

let sumOfInvalidIds = 0;

ranges.forEach((range) => {
  const [start, end] = range.split("-");

  for (let i = parseInt(start); i <= parseInt(end); i++) {
    const id = i.toString();
    if (id.length % 2 === 0) {
      const half = id.slice(id.length / 2);
      if (id === half.repeat(2)) sumOfInvalidIds += parseInt(id);
    }
  }
});

console.log("The sum of invalid IDs is: ", sumOfInvalidIds);
