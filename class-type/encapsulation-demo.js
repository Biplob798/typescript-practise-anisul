// //  public,private,protected,readonly
// // default -public 
//  class User{
//      public userName:string;
//      public age:number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(userName:string,age:number){
//         this.userName=userName;
//         this.age=age
//     }
//     display():void{
//         console.log(`userName: ${this.userName}, age: ${this.age} `);
//     }
// }
// class Student extends User{
//    studentId:number
//    constructor(userName:string,age:number,studentId:number){
//     super(userName,age)
//     this.studentId=studentId
// }
// display():void{
//     // console.log(`userName: ${this.userName}, age: ${this.age} id: ${this.studentId}`);
// }
//     }
// let student1= new Student('biplob',45,121);
// // student1.display()
// let user1= new User('robi',23)
// user1.userName='kamal'
// console.log(user1);
// //  public,private,protected,readonly
// // default -public 
// class User{
//     protected userName:string;
//     protected age:number
//    constructor(userName:string,age:number){
//        this.userName=userName;
//        this.age=age
//    }
//    display():void{
//        console.log(`userName: ${this.userName}, age: ${this.age} `);
//    }
// }
// class Student extends User{
//   studentId:number
//   constructor(userName:string,age:number,studentId:number){
//    super(userName,age)
//    this.studentId=studentId
// }
// display():void{
//    // console.log(`userName: ${this.userName}, age: ${this.age} id: ${this.studentId}`);
// }
//    }
// let student1= new Student('biplob',45,121);
// // student1.display()
// let user1= new User('robi',23)
// user1.userName='kamal'
// console.log(user1);
//  public,private,protected,readonly
// default -public 
var User = /** @class */ (function () {
    function User(userName, age, studentId) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age, " "));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age, studentId) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age, " id: ").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
var student1 = new Student('biplob', 45, 121);
student1.setStudentId(12);
console.log(student1.getStudentId());
// student1.display()
