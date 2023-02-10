let numbers = [1,2,3,4,5,6,7,8,9];

function sumOfnumbers(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element%2==1){
            sum+=element;
        }
    }
    return sum;
}

alert("Odd numbers sum is " + sumOfnumbers(numbers));