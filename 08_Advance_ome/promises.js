const promiseOne = new Promise((resolve, reject)=>{
    // DO an Async Task
    // DB calls, Cryptography, Network call
    
    setTimeout( ()=> {
        console.log("Async task is complete");
        resolve()
    },1000)

})

promiseOne.then(function(){
     console.log("Promised Consumed");
})


new Promise((resolve, reject)=>{
    setTimeout( ()=> {
        console.log("Async task  2 is complete");
        resolve()
    },1000)

}).then( function(){
    console.log("Async 2 resolved");
    
})



const promiseThree = new Promise( function(resolve , reject){
    setTimeout(function(){
         resolve({username: "Chai", email: "chai@ex.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const PromiseFour = new Promise( function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error) {
            resolve({username:"Atharva",Password:"123"})
        }
        else{
            reject('ERROE:Somthing went wrong')
        }
    },2000)
})

PromiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
    
})



const PromiseFive = new Promise( (resolve,reject) => {
    setTimeout(function(){
        let error = true 
        if (!error) {
            resolve({username:"javaScript",Password:"123"})
        }
        else{
            reject('ERROE:Js went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }  
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.