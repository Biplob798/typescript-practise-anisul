var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 -name:biplob,age:25
// user2 -name:islam,age:27
// user3 -name:khan,age:23
var user1 = new User('biplob islam', 24);
var user2 = new User('raki islam', 24);
user1.display();
user2.display();
