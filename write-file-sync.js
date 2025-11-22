const fs = require("fs");

const content = "The new sync content added \n synchronous way";


try {
  fs.writeFileSync("./output/test-sync.txt", content);
} catch (error) {
  console.log(error.message);
}

console.log("File Created");

const content2 = "This is a content too \n asynchronously"

fs.writeFile("./output/test-async.txt", content2, (error) => {
    if(error){
        console.log(error.message);
    } else{
        console.log("file written asynchronously");
    }
})
