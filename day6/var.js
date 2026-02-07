const accountId = 2564
let accountEmail = "vivek@gmail.com"
var accountPass = "78906"
accountCity = "Jaipur" // wrong way
let accountState // undefined
accountEmail = "shukla123@gamil.com"
accountCity = "Bengal"
accountPass = "45679"
console.log(accountId)
// use table (using square brakets) for print all the variables in the table form
/* Prefer not to use var because of issue in block scope and functional scope */
console.table([accountId,accountEmail,accountCity,accountPass,accountState])