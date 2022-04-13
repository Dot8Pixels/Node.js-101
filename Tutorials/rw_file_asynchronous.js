// Non-Blocking
const fs = require("fs");

// Read input.txt
fs.readFile("Tutorials/my_file/input.txt", "utf-8", (err, data) => {
  if (err) return console.log(`Error was found, ${err}`);
  const outputText = `Hello Node.js\n${data}\nUpdated on ${new Date()}`;
  fs.writeFile("Tutorials/my_file/output_async.txt", outputText, (err) => {
    if (err) return console.log(`Error was found, ${err}`);
    console.log(" --- End Process --- ");
  });
});
