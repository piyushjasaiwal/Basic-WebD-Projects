    // var myvar = setInterval(settime,1000);
    var time = "";
    setInterval(()=>{
        var a = new Date();
        time = a.getHours() +":"+ a.getMinutes()+":"+a.getSeconds();
        document.getElementById("time").innerHTML = time;
    },1000)



// function settime(){
//     var d = new Date();
//     var ans = "";
//     var hr = d.getHours();
//     var min = d.getMinutes();
//     var sec = d.getSeconds();
//     if(hrs <= 9){
//         ans = ans + "0"+hr + ":";
//     }else{
//         ans = ans + hr+":";
//     }

//     if(min <= 9){
//         ans = ans + "0"+min + ":";
//     }else{
//         ans = ans + min+":";
//     }

//     if(sec <= 9){
//         ans = ans + "0"+sec; 
//     }else{
//         ans = ans + sec;
//     }

//     if(hr>=0 && hr <=11){
//         ans = ans+" A.M.";
//     }else{
//         ans = ans + " P.M.";
//     }

    
//     document.getElementById("time").innerHTML = ans +"";
//     console.log(ans);
// }

 
