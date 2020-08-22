var val1 = prompt("Enter the first Number");
val1 = parseInt(val1);

var val2 = prompt("Enter the second Number");
val2 = parseInt(val2);

var op = prompt("Enter The operator");


var message = "egegg";
switch(op){
    case '+': message = val1 + " " + op +" "+val2 +" = "+ (val1+val2);
        break;

    case '-': message = val1 + " " + op +" "+val2 +" = "+ (val1-val2);
        break;

    case '*': message = val1 + " " + op +" "+val2 +" = "+ (val1*val2);
        break;

    case '/': message = val1 + " " + op +" "+val2 +" = "+ (val1/val2);
        break;        
}

alert(message);

document.write(message);
document.getElementById("head").innerHTML = message;