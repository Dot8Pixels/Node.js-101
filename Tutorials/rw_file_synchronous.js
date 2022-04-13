// Blocking
const fs = require("fs");

// Read File
const data = fs.readFileSync("Tutorials/my_file/input.txt", "utf-8");
console.log(data);
console.log(" --- End Process --- ");

// Write File
const outputText = `Hello Node.js\n${data}\nUpdated on ${new Date()}`;
fs.writeFileSync("Tutorials/my_file/output_sync.txt", outputText);
console.log("Already wrote file");
