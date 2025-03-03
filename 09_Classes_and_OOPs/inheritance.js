class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(` USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcources(){
        console.log(` A new cource was added by ${this.username}`);
        
    }
}


const chai = new Teacher("chai","chai@123","123")

chai.addcources()

const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
