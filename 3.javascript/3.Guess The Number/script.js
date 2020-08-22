do{
    var ans = 5;
    var input1 = prompt("Enter a number between 1 and 10");

    input1 = parseInt(input1);

    if(input1 == ans){
        var message = "Wow you guessed the number right";
        document.getElementById('head').innerHTML = message;
        ;
    }else{
        alert("wrong choice");
    }


}while(input1 != ans);