// // console.log('hello');
// // function signature
// let userInfo1:()=>void
// let userInfo2:(name:string)=>void
// let userInfo3:(name:string,age:number)=>void
//  userInfo1 =()=>{
//     console.log('biplob islam 24 years old');
// }
// userInfo2 =(name:string)=>{
//     console.log('biplob islam 24 years old');
// }
// userInfo3 =(name:string,age:number)=>{
//     return `${'biplob islam 24 years old'}`;
// }
// userInfo1()
// userInfo2('biplob')
// userInfo3('biplob',34)
// -----------------------------------
// class interface 
// interface IUser{
//     id:number,
//     name:string,
//     age:number
// }
// let users:IUser[]=[]
// let user1:IUser={
//     id:1,
//     name:'biplob',
//     age:23
// }
// let user2:{
//     id:number,
//     name:string,
//     age:number
// }={
//     id:2,
//     name:'mr.potato',
//     age:43
// }
// users.push(user1)
// console.log(users);
// const printUserInfo =(user:{name:string;id:number;age:number})=>{
// console.log(`user id: ${user.id}, name: ${user.name} age: ${user.age}`);
// }
// users.forEach(user=>printUserInfo(user))
// interface IUserFormatter{
//     formatUser:()=>string
// }
// class User implements IUserFormatter{
//     // fullName:string;
//     // age:number
//     constructor(private fullName:string,private age:number){
//         // this.fullName=fullName;
//         // this.age=age
//     }
//     formatUser= () => {
//         return `name : ${this.fullName}, age ${this.age}`
//     }
// }
// let user = new User('mr.tomato',23)
// console.log(user);
// -----------------------------
// Narrowing type 
// function printTodos(todos:string[] |null){
//     if( todos){
//  todos.map(todo=>console.log(todo))
//     }
//     else{
//        console.log('no todos')
//     }
// }
// const todos =['todo1','todo2']
// printTodos(null)
// printTodos(todos)
// -------------------------------
// type generice 
// function printInfo(userId:string|boolean|number|object){
// function printInfo<X,Y>(userId:X,userAge:Y){
//     console.log(`user id: ${userId} , Age ${userAge}`);
// }
// array function ar madhumya
var printInfo = function (userId, userAge) {
    console.log("user id: ".concat(userId, " , Age ").concat(userAge));
};
printInfo('103', 23);
printInfo(2, '34');
// printInfo(true)
