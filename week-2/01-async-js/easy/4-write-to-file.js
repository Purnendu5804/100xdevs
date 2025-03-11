// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

 const fs = require("fs");

 let text = "The file was written through fs.writeFile() function"
 
 fs.writeFile("a.txt" , text , (err,data) => {
    console.log("file written successfully");
    console.log(fs.readFileSync("a.txt" , "utf8"));
    
    
 });

 console.log("with fs.writeFile() function");
 