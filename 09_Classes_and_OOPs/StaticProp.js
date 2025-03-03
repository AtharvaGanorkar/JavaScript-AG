class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(` USERNAME: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const Atharva = new User("Atharva")

console.log(Atharva.createId());
 
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());