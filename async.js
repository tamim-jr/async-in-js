// async function fullName (name){
//     return "Hello "+ name;
// }

// const { retry } = require("async");

// const myName = fullName("Mofiz!");
// console.log(myName);
// myName.then(res => console.log(res));

async function allusers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    allUsers(data);
    return data;
}
allusers();

function allUsers(data){
    const singleUser = data.map(data => data.username);
    const ul = document.getElementById("usersid");
    
    for (let i = 0; i < singleUser.length; i++) {
        const element = singleUser[i];

        const li = document.createElement("li");
        li.innerText= element;

        ul.appendChild(li);
        
    }
}