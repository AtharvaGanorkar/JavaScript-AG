const accountId = 14553
let accountEmail = "xyz@google.com"
var accountPassword = "123456"
accountCity = "Nagpur"

// accountId = 23 // Not allowed

accountEmail = "snjs@sj.com"
accountPassword = "23647"
accountCity = "Bhopal"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


