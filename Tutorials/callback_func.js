// normal function

console.log("Synchronous")

function calculate(x, y) {
  return x + y;
}

function display(result) {
  console.log(`sum = ${result}`);
}

const sum = calculate(100, 50);
display(sum);

console.log("-----------------")

// callback function

console.log("Asynchronous")

function calculate2(x, y, callback) {
    console.log("Calculating...")
    setTimeout(() => {     
        const sum = x + y;
        callback(sum)
    }, 3000)
  }
  
  function display2(result) {
    console.log(`sum = ${result}`);
    console.log("-----------------")
  }
  
  calculate2(100, 50, display2);

