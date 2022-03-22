// Create Promise
const connect = true;
const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";
const url4 = "kong.dev/file4.json";
const url5 = "kong.dev/file5.json";

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log(`Downloading from ${url}`);
    setTimeout(() => {
      if (connect) {
        resolve(`Load ${url} completed`);
      } else {
        reject("Error");
      }
    }, 1000);
  });
}


// Async & Await
async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
    console.log("Download Completed")
}

start()

// API pull backend data -> show in frontend
// API (promise) -> (pending) -> wait data (await) -> Show 
