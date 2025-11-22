const fs = require("fs");

fs.writeFileSync("./output/temp-sync.txt", "File created.")
console.log("File Created");

if(fs.existsSync){
    console.log("File Exists");

    fs.unlinkSync("./output/temp-sync.txt")
}

console.log("Deleted");

try {
  fs.unlinkSync("./output/temp-sync.txt")  
} catch (error) {
    console.log(`Error: ${error.message}`);
}


fs.writeFile("./output/temp-async.txt", "Another file created", (error) => {
    if(error) console.log(`Error: ${error.message}`);
    console.log("another file created");

    fs.unlink("./output/temp-async.txt", (err) => {
        if(err){
            console.log(err.message);
        } else {
            console.log("File deleted");
        }
    })
})