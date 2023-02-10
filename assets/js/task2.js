function factorialFunction(n){
    let fact = n;
    for (i = n - 1; i >= 1; i--)
    {
        fact = fact * i;
    }
    return fact;
}

n = prompt("Enter a number:");

if(n == 0){
    alert("Factorial cannot be a zero");
}
else if(n < 0){
    alert("Factorial cannot be a negative number");
}
else{
    alert(factorialFunction(n))
}
