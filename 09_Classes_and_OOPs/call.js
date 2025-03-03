function SetUername(username){
    this.username = username
    console.log("called")
}


function CreateUsername(username,email,password){
    SetUername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new CreateUsername("Atharva","AG@123","1234")
console.log(chai);
