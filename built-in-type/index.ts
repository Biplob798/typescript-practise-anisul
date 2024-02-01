// built in type: number,boolean,string,void,undefined,null
// let id---any type 
let userId:number
let firstName:string
let lastName:string
let fullName:string
let isActive:boolean
 userId =100
 firstName='biplob'
 lastName='islam'

 isActive=true
 fullName=firstName.concat(lastName)
 console.log(`Your Id: ${userId}, username: ${fullName}, account activated: ${isActive}`);
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


function display(){
    console.log('hi i am display');
}
display()