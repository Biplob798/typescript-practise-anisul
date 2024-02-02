"use strict";
// console.log('hello i am ts');
// const display =(message:string)=>{
//     let x: number = 25
//     console.log('hello');
// } 
// display()
// console.log('hello i am index');
const userForm = document.querySelector('.user-form');
console.log(userForm);
const userName = document.querySelector('#name');
console.log(userName);
const userEmail = document.querySelector('#email');
console.log(userEmail);
const userPassword = document.querySelector('#password');
console.log(userPassword);
const userCountry = document.querySelector('#country');
console.log(userCountry);
const userFeedback = document.querySelector('#feedback');
console.log(userCountry);
userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value
    };
    console.log(data);
});
