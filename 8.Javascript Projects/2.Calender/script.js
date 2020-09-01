function set_time(){
    var myvar = setInterval(settime,1000);
}


function settime(){
    var d = new Date();
    var ans = "";
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    if(hrs <= 9){
        ans = ans + "0"+hr + ":";
    }else{
        ans = ans + hr+":";
    }

    if(min <= 9){
        ans = ans + "0"+min + ":";
    }else{
        ans = ans + min+":";
    }

    if(sec <= 9){
        ans = ans + "0"+sec; 
    }else{
        ans = ans + sec;
    }

    if(hr>=0 && hr <=11){
        ans = ans+" A.M.";
    }else{
        ans = ans + " P.M.";
    }

    // document.getElementById("time").innerText = ans +"";

    // document.getElementById("time").textContent = ans;
    document.getElementById("time").innerHTML = ans +"";
    console.log(ans);
}

 
