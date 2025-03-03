// ES6

class User {
    constructor(username,email,password){
        this.username =username;
        this.email = email;
        this.password =password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chsi","chai@112","123")

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scene

function NUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

NUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
NUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new NUser("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());