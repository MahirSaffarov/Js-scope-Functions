function divideFunction(n){
    if(n%3==0 && n%7==0){
        alert("Successfully divided.")
    }
    else{
        alert("Not divided.")
    }
}

n = prompt("Enter a number:");
divideFunction(n);