const http = require("http");

const server = http.createServer((req, res) => {
    const my_html = `
    <h1>Hello Node.js</h1>
    <p>Dot8Pixels | 2022</p>
    `

    res.write(my_html);
    res.end();
  })
  
  server.listen(8080, 'localhost', () => {
      console.log('Server started on port 8080')
  });
