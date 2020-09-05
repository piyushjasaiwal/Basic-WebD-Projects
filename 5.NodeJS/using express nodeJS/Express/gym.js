const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const port = 80
//for serving the static files
app.use('\static',express.static('static'));
app.use(express.urlencoded())

//PUG SPECIFIC STUFF  
app.set('view engine','pug')   // Set the template engine as pug
app.set('views',path.join(__dirname,'views'))   // Set the views directory
 
//setting the end points of the pug
app.get('/',(req,res) => {
    const cont = "the main body is very good";
    const params = {title:"my website",content:cont};
    res.status(200).render('gym_website.pug',params);
});

app.listen(port,()=>{
    console.log(`serving is started at ${port}`)
})

app.post('/',(req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let themessage = `The name is ${name} and he is ${age} years old \n address = ${address} and some more info about the person is ${more}`;
    fs.writeFileSync('output.txt',themessage);
    res.status(200);
});