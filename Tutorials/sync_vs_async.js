// synchronous
console.log("Synchronous");
console.log("Start Download");
console.log("Downloading");
console.log("Finished");
console.log("------------------");

// asynchronous
console.log("Asynchronous");
console.log("Start Download");
setTimeout(() => {
  console.log("Downloading");
});
console.log("Finished");
