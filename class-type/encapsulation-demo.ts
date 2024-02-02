 
// //  public,private,protected,readonly
// // default -public 
//  class User{
//      public userName:string;
//      public age:number

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
class User {
    public userName:string;
    public age:number
   

   constructor(userName:string,age:number ,studentId:number){
    this.userName=userName
      this.age=age
   }
   display():void{
       console.log(`userName: ${this.userName}, age: ${this.age} `);
   }
  
   }

   class Student extends User {
    private studentId:number
    constructor(userName:string,age:number ,studentId:number){
        super(userName,age,studentId)
          this.studentId=studentId
       }
       display():void{
        console.log(`userName: ${this.userName}, age: ${this.age} id: ${this.studentId}`)
    }

    setStudentId(studentId:number):void{
        this.studentId=studentId
    }
    getStudentId():number{
        return this.studentId
    }
   }

let student1= new Student('biplob',45,121);
student1.setStudentId(12)
console.log(student1.getStudentId());
// student1.display()

