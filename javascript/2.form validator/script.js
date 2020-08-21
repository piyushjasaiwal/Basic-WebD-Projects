function checkformdata(){

    var tname = document.getElementById('name').value;

    var tage = document.getElementById('age').value;

    var temail = document.getElementById('email').value;

    var male = document.getElementById('gender1').checked;

    var female = document.getElementById('gender2').checked;

    var terms = document.getElementById('chk').checked;

    var message = "Name --> " + tname +"\nAge --> " + tage + "\ntE-mail --> " + temail + "\nMale --> " +  male + "\nFemale --> "+female + "\n Terms and Condition --> " + terms;
    
    document.getElementById('thepara').innerHTML = message;
    
}