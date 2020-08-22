function checkformdata(){

    var tname = document.getElementById('name').value;

    var tage = document.getElementById('age').value;

    var temail = document.getElementById('email').value;

    var male = document.getElementById('gender1').checked;

    var female = document.getElementById('gender2').checked;

    var terms = document.getElementById('chk').checked;

    var message = "Name --> " + tname + "<br>Age --> " + tage + "<br>tE-mail --> " + temail + "<br>Male --> " +  male + "<br>Female --> "+female + "<br>Terms and Condition --> " + terms;
    
    document.getElementById('thepara').innerHTML = message;
    
}