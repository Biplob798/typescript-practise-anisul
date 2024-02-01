// let user1:{userName:string,userId:number}
// let user1:object
//  user1={userName:'biplob',userId:100}
// console.log(user1);
// let user1:object[]
//  user1=[{userName:'biplob',userId:100}]
// console.log(user1);
var users;
users = [];
var user1;
user1 = { userName: 'biplob', userId: 100 };
users.push(user1);
console.log(users);
for (var key in users) {
    console.log(users[key]['userName']);
}
