let square = [1,2,3,4,6]
function squareFunction(square){
    let sum = 0;
    let num = 0;
    for (let i = 0; i < square.length; i++) {
        const element = square[i];
        if(element%2==0){
            num = element*element;
            sum+=num;
        }
    }
    return sum;
}

alert(squareFunction(square));