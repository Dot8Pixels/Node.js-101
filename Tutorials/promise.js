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

// Promise Then, Catch, Finally
downloading(url1)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Download Completed");
  });


// Promise Hell
downloading(url1).then(function(result){
  console.log(result)
  downloading(url2).then(function(result){
    console.log(result)
    downloading(url3).then(function(result){
      console.log(result)
      downloading(url4).then(function(result){
        console.log(result)
        downloading(url5).then(function(result){
          console.log(result)
        }).finally(() => {
          console.log("Download Completed")
        })
      })
    })
  })
})


// Promise Then
downloading(url1)
  .then(function (result) {
    console.log(result);
    return downloading(url2);
  })
  .then(function (result) {
    console.log(result);
    return downloading(url3);
  })
  .then(function (result) {
    console.log(result);
    return downloading(url4);
  })
  .then(function (result) {
    console.log(result);
    return downloading(url5);
  })
  .finally(() => {
    console.log("Download Completed");
  });
