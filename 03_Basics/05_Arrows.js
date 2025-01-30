const user = {
    username: "Atharva",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "Atharva"
//     console.log(this.username);
    
// }
// chai()


// +++++++++++++ARROW FUNCTION +++++++++++++++

const chai = () => {
    let username = "Atharva"
    console.log(this.username);
    console.log(this);
    
    
}

// chai()

const addTwo = (num1,num2) => {
    return num1 + num2
}
 
console.log(addTwo(2,3));

// ++++++++++++ Implicit Return ++++++++++

const addThree = (num1 , num2, num3) => num1 + num2 + num3

// const add3 = (num1 , num2, num3) => (num1 + num2 + num3)

const add3 = (num1 , num2, num3) => ({username:"Atharva"})


console.log(addThree(1,2,3));
