sta = document.getElementById("start");
sta.addEventListener('click',start_timer);


sto = document.getElementById('stop');
sto.addEventListener('click',stop_timer);


res = document.getElementById('reset');
res.addEventListener('click',reset_timer);

let time = 0;

function start(){
    time = time+1;
    let temp = time;
    let hours = Math.floor(temp/3600);
    temp = temp%3600;
    let minutes = Math.floor(temp/60);
    temp = temp%60;
    let second = temp;
    let  ans = "";
    if(hours<=9){
        ans = 0+""+hours+" hours : ";
    }else{
        ans = hours+" hours : ";
    }

    if(minutes<=9){
        ans = ans + 0+""+minutes+" minutes : ";
    }else{
        ans = ans + minutes+" minutes : ";
    }

    if(second<=9){
        ans = ans + 0+""+second+" seconds";
    }else{
        ans = ans + second+" seconds";
    }

    time_stamp = document.getElementById("time");
    time_stamp.innerHTML = ans+"";
}

let myvar ;

function start_timer(){

    myvar = setInterval(start,1000);
}

function stop_timer(){
    clearInterval(myvar);
}

function reset_timer(){
    clearInterval(myvar);
    time = 0;
    document.getElementById("time").innerHTML = "00 hours : 00 minutes : 00 seconds";
}

