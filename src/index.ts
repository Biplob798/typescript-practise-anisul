// console.log('hello i am ts');

// const display =(message:string)=>{
//     let x: number = 25
//     console.log('hello');
// } 
// display()
// console.log('hello i am index');
const userForm = document.querySelector('.user-form') as HTMLFormElement
console.log(userForm);

const userName = document.querySelector('#name') as HTMLInputElement
console.log(userName);

const userEmail = document.querySelector('#email') as HTMLInputElement
console.log(userEmail);

const userPassword = document.querySelector('#password') as HTMLInputElement
console.log(userPassword);
const userCountry = document.querySelector('#country') as HTMLSelectElement
console.log(userCountry);
const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement
console.log(userCountry);

userForm.addEventListener('submit',(event:Event)=>{
event.preventDefault()
const data={
    userName:userName.value
    userEmail:userEmail.value
    userPassword:userPassword.value
    userCountry:userCountry.value
    userFeedback:userFeedback.value
}
console.log(data);
})