console.log("Hello World");

const accountId = 456123;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

accountEmail = "xyz@gmail.com";
accountPassword = "212121";
accountCity = "Mumbai";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
