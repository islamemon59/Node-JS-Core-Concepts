const fs = require("fs");

console.log("Start Reading");

fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error.message);
  }
  console.log("File Content");
  console.log(data);
});

console.log("Finished");
