// const Tideruser = new Object(); // singleton Object

const Tideruser = {}

Tideruser.id = "123abc"
Tideruser.name = "sam"
Tideruser.isloggedIn = false

// console.log(Tideruser);

const regularuser = {
    email: "ath@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Atharva",
            lastname: "Ganorkar"
        }
    }
}

console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj3 = {5:'e', 6:'f'}

// const obj4 = {obj1,obj2,obj3}

// const obj4 = {...obj1,...obj2,...obj3} //this will mostly use

const obj4 = Object.assign({}, obj1, obj2, obj3)



// console.log(obj4);

const user = [
    {
        id: 1,
        email: "Ag@gmail.com"
    },
    {
        id: 1,
        email: "Ag@gmail.com"
    },
    {
        id: 1,
        email: "Ag@gmail.com"
    }
]

user[1].id

console.log(Tideruser);
console.log(Object.keys(Tideruser));
console.log(Object.values(Tideruser));
console.log(Object.entries(Tideruser));

console.log(Tideruser.hasOwnProperty('isloggedIn'));




