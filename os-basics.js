const os = require("os");

console.log("system info \n");
console.log("-".repeat(60));
console.log("Platform Details");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS Type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("-".repeat(60));

console.log("\n CPU Info");
const cpus = os.cpus();

console.log("-".repeat(60));

console.log(cpus);
console.log("CPU Model: ", cpus[0].model);
console.log("Number of Cors: ", cpus.length);
console.log("CPU Speed: ", cpus[0].speed);

console.log("-".repeat(60));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log(`Total Memory ${(totalMem/1024/1024/1024).toFixed()} GB`);
console.log(`Free Memory ${(freeMem/1024/1024/1024).toFixed()} GB`);

console.log("-".repeat(60));

const upTime = os.uptime();
const days = Math.floor(upTime/86400);
const hours = Math.floor((upTime % 86400) / 3600)
const minutes = Math.floor((upTime % 3600) / 60)

console.log(`${days} days ${hours} hours ${minutes} minutes`);