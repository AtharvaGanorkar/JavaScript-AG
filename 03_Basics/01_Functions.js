function sayMyName(){
    console.log('H');
    console.log('I');
    
}

// sayMyName()

function AddTwoNumbers(num1,num2){
        console.log(num1 + num2);
        }

function AddTwoNumbers(num1,num2){
    let result = num1 + num2
    return result
    // console.log("AG"); // this will not execute, coz after return function
                          // Function doesn't execute anything..
    
}

const result = AddTwoNumbers(2,3)

console.log("Result: ",result);


function loginUserName(username){
    return `${username} just logged in`
}

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

function loginUserMessage2(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserName("hitesh"))
console.log(loginUserMessage("AG"));
console.log(loginUserMessage2());



