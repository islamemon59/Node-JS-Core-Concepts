const path = require("path");

console.log("Current file Info \n");
console.log("Filename", __filename);
console.log("Directory", __dirname);

console.log("\n" + "-".repeat(60) + "\n");

const filePath = "/emon/L2B6/Mission3/Module10/node.txt";

console.log("analyzing Path: ", filePath);
console.log("Directory", path.dirname(filePath));
console.log("Basename", path.basename(filePath));
console.log("ExtName", path.extname(filePath));
console.log("File name", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(60) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed Path", parsed);

console.log("\n" + "-".repeat(60) + "\n");

console.log("Formeted Path", path.format(parsed));