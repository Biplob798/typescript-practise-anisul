// built in type: number,boolean,string,void,undefined,null
// let id---any type 
var userId;
var firstName;
var lastName;
var fullName;
var isActive;
userId = 100;
firstName = 'biplob';
lastName = 'islam';
isActive = true;
fullName = firstName.concat(lastName);
console.log("Your Id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActive));
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log('hi i am display');
}
display();
