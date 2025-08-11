// 2 types of memory in javascript
// 1. Stack (Primitive) it gives copy of the value
// 2. Heap (Non-Primitive) it gives reference of the value

// let myYoutubeName = "gulshan";
// let anotherName = myYoutubeName;
// console.log(myYoutubeName);
// console.log(anotherName);

// anotherName = "chaiaurcode";
// console.log(myYoutubeName);
// console.log(anotherName);

let myYoutubeName = "gulshanCode";

let anotherName = myYoutubeName;

console.log(myYoutubeName);
console.log(anotherName);

anotherName = "LostCode";

console.log(anotherName);

// **********************************This is the Stack part*****************************

let userOne = {
  email: "gulshan@google.com",
  upi: " gulshan@ybl.com",
  Age: 27,
};
console.log(userOne);

let userTwo = userOne;

userTwo.Age = 22;
userTwo.upi = "Lost@ybl.com";

console.log(userOne);
console.log(userTwo);

// this is the heap part where it gives the refrence of the value.
