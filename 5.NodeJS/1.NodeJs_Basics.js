// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html>
  <body>
  
  <h2>An Unordered HTML List</h2>
  
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>  
  
  <h2>An Ordered HTML List</h2>
  
  <ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol> 
  
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});