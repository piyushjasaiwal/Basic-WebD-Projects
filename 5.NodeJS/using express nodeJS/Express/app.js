const express = require('express');
const app = express();
const port = 80;
const path = require('path');

// For serving static file
app.use('/static',express.static('static'))

//set the template engine as pug
app.set('view engine','pug')

//set the view directory
app.set('views',path.join(__dirname,'views'));

//our pug demo endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo', { title: 'Hey there', message: 'Hello there and thanks!' })
});


app.get('/',(req,res)=>{
    res.status(200).send('this is the homepage of the first express app made by piyush');
});

app.listen(port, ()=>{
    console.log(`appliation started at ${port}`);
});

app.post('/',(req,res)=>{
    res.send('this is from post part of the homepage');
});

app.get('/this',(req,res)=>{
    res.status(404).send("this page is not found");
});