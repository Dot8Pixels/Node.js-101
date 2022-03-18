// Simulate File Download

const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";
const url4 = "kong.dev/file4.json";
const url5 = "kong.dev/file5.json";

function downloading(url, callback) {
  console.log(`Downloading from ${url}`);
  setTimeout(() => {
    callback(url);
  }, 3000);
}

downloading(url1, function (result) {
  console.log(`${result} completed`);
  downloading(url2, function (result) {
    console.log(`${result} completed`);
    downloading(url3, function (result) {
      console.log(`${result} completed`);
      downloading(url4, function (result) {
        console.log(`${result} completed`);
        downloading(url5, function (result) {
          console.log(`${result} completed`);
        });
      });
    });
  });
});
