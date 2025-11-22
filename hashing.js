 // password123;
 //asdoifuasodifujasodiujhawioe

 const crypto = require("crypto");

 console.log("\n MD5 hash: ");
 const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); // not secure
 const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");

 console.log("Input Password: password123");
 console.log("MD5 HashedPassword: ", md5Hash);
 console.log("MD5 Hashed2Password: ", md5Hash2);

 const sha256Hash = crypto.createHash("sha256").update("password123").digest("hex");
 const sha256Hash2 = crypto.createHash("sha256").update("password123").digest("hex");
 console.log("Input Password: password123");
 console.log("SHA256 HashedPassword: ", sha256Hash);
 console.log("SHA256 Hashed2Password: ", sha256Hash2);

 const sha512Hash = crypto.createHash("sha512").update("password123").digest("hex");
 console.log("Input Password: password123");
 console.log("SHA256 HashedPassword: ", sha512Hash);