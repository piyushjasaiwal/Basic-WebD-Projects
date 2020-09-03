const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;
const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');



const server = http.createServer((req,res) =>{
    console.log(req.url);
    res.statusCode = 200;
    url = req.url;
    if(url == '/'){
        res.end(home);
    }else if(url == '/contact'){
        res.end(contact);
    }else if(url == '/services'){
        res.end(services);
    }else if(url == '/about'){
        res.end(services);
    }else{
        res.end('<h1>404 Not Found</h1>')
    }
    
    res.setHeader('Content-Type', 'text/html');
});


server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`);
});