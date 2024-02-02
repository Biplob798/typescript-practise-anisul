// import { studentName as name,studentAge as age } from "./student";
import * as Student from './student'
// function displayInfo():void{
//     console.log(`${name} ${age}`);
// }
function displayInfo():void{
    console.log(`${Student.studentName} ${Student.studentAge}`);
}
displayInfo()