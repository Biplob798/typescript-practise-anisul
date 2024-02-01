class User{
    // properties,methods,constructor

     userName:string;
     age:number

    constructor(userName:string,age:number){
        this.userName=userName;
        this.age=age
    }
    display():void{
        console.log(`userName: ${this.userName}, age: ${this.age}`);
    }
}

class Student extends User{
   studentId:number
   constructor(userName:string,age:number,studentId:number){
    super(userName,age)
    this.studentId=studentId
}
display():void{
    console.log(`userName: ${this.userName}, age: ${this.age} id: ${this.studentId}`);
}
    }
let student1= new Student('biplob',45,121);
student1.display()

// class object
// user1 -name:biplob,age:25
// user2 -name:islam,age:27
// user3 -name:khan,age:23

// let user1= new User('biplob islam',24)
// let user2= new User('raki islam',24)
// user1.display()
// user2.display()