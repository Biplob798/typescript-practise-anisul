var users;
users = [];
var user1;
user1 = { userName: 'biplob', userId: 100 };
users.push(user1);
var user2;
user2 = { userName: 'islam', userId: 102 };
users.push(user2);
var user3;
user3 = { userName: 'khan', userId: 103 };
users.push(user3);
console.log(users);
for (var key in users) {
    console.log(users[key]['userName']);
}
var getRequest;
getRequest = 'GET';
function requestHandle(requestType) { console.log(requestType); }
requestHandle('GET');
