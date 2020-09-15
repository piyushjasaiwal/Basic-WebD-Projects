const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/kitty', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){
    console.log("we are connected");
});

const kittyschema = new mongoose.Schema({
    name:String
});

kittyschema.methods.speak = function(){
    let greeting = "my name is "+this.name;
    console.log(greeting);
}

const kitten = mongoose.model('piyush_cat',kittyschema);

const first = new kitten({name:"sundari"});

console.log(first.name);



const fluffy = new kitten({ name: "fluff" });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });