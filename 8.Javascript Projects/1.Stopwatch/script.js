// Unfinished project

var temp = 0;

function start(){
    temp = temp+1;
    var hours = temp/3600;
    // hours = get_accurate(hours+"");
    var time = temp%3600;
    var minute = temp/60;
    // minute = get_accurate(minute+"");
    time = temp%60;
    var seconds = time;
    var curr = hours + " hrs : "+minute + " min : "+seconds + " sec";
    document.getElementById("time").innerHTML = curr;
}

var to_stop;

function start_timer(){
    to_stop = setInterval(start,1000);
}

function stop_timer(){
    clearInterval(to_stop);
}

function reset_timer(){
    clearInterval(to_stop);
    time = 0;
    document.getElementById("time").innerHTML = "00 hours : 00 minute : 00 seconds";
}

function get_accurate(val){
    var ans = "";
    for(var i = 0;i<val.length();i++){
        if(val.charAt(i) == "."){
            return ans;
        }else{
            ans = ans+val.charAt(i);
        }
    }
    return ans;
}