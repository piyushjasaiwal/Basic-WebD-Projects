const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const body_parser = require('body-parser')
mongoose.connect('mongodb://localhost/contact_dance', {useNewUrlParser: true});

const port = 80
app.use(body_parser.urlencoded({ extended: false }));
//for serving the static files
app.use('/static',express.static('static'));

// const db = mongoose.connection;

//making a schema for mongoose
var contact_schema = new mongoose.Schema({
    name: String,
    age: String,
    address: String,
    exp: String,
    opinion: String
  });

  //modelling the schema for the database
  const Contact = mongoose.model('Contact', contact_schema);

//pug specific stuff
app.set('view-engine', 'pug')

app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
});

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})

app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    res.status(200).render('response.pug')
    console.log(myData.name)
    // myData.save().then(()=>{
    //     res.status(200).render('response.pug')
    // }).catch(()=>{
    //     res.status(404).send('Response Not recorded to the data base')
    // });
    // console.log(req.body.name)
})

app.listen(port,()=>{
    console.log(`server is started at ${port}`);
});

