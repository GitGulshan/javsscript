// console.log("string" + " hello");

let name = "gulshan";

let gitRepo = 10;

// console.log(name + gitRepo + " this is the random normalize. "); // this is the old technique to write a string.

// ``back tick is the mordern techinique to write a technique this technique is called string interpullation

//  console.log(
//   `Hey my ${name} and my github repo value is ${gitRepo} and this is the learing series of string`
// );

// another way to declare a string

const gameName = new String("walkaway");
console.log(gameName);
console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.lastIndexOf());
console.log(gameName.concat());
console.log(gameName.toUpperCase());

//sub-string

const newString = gameName.substring(1, 6);
console.log(newString);

const anotherNewString = gameName.slice(-8, 4);
console.log(anotherNewString);

const toyName = new String("cyberpunk");
const anotherName = toyName.slice(-9, 0);
console.log(typeof anotherName);

const anothName = toyName.split(" ").reverse().join(" ");
console.log(anothName);
