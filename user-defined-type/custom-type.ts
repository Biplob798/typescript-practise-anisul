// let users:object[]
// users=[]
type User={userName:string,userId:number}
let users:User[]
users=[]

let user1:User
 user1={userName:'biplob',userId:100}
 users.push(user1)
let user2:User
 user2={userName:'islam',userId:102}

 users.push(user2)
let user3:User
 user3={userName:'khan',userId:103}

 users.push(user3)

console.log(users);
for(const key in users){
    console.log(users[key]['userName']);
}

type RequestType='GET'|'POST'

let getRequest:RequestType
getRequest='GET'

function requestHandle(requestType:RequestType){console.log(requestType);}
requestHandle('GET')