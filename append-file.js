const fs = require("fs");

// fs.writeFileSync("./output/app.log", "Application started...");

// console.log("File started");

// const logEntry1 = `\n${new Date().toISOString()} user logged in \n`
// fs.appendFileSync("./output/app.log", logEntry1)

const logEntry2 = `\n${new Date().toISOString()} user logged out`
fs.appendFileSync("./output/app.log", logEntry2)