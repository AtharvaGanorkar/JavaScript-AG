function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500));
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: 'Ag',
    price: 199
}

function handleObject(anyobject){
    console.log(`my name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)


const myNewArray = [100, 200, 300, 400, 500]

function returnsSecondValue(getArray){
    return getArray[2]
}

console.log(returnsSecondValue(myNewArray));
