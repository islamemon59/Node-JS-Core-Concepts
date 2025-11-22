const fs = require("fs");
console.log("Start Reading");

try {
  console.log("File Content");
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error.message);
}

console.log("Finished");
