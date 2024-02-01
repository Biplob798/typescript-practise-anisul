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

// class object
// user1 -name:biplob,age:25
// user2 -name:islam,age:27
// user3 -name:khan,age:23

let user1= new User('biplob islam',24)
let user2= new User('raki islam',24)
user1.display()
user2.display()