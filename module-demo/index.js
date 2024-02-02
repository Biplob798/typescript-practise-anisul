"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { studentName as name,studentAge as age } from "./student";
var Student = require("./student");
// function displayInfo():void{
//     console.log(`${name} ${age}`);
// }
function displayInfo() {
    console.log("".concat(Student.studentName, " ").concat(Student.studentAge));
}
displayInfo();
