async function fullName (name){
    return "Hello "+ name;
}

const myName = fullName("Mofiz!");
console.log(myName);
myName.then(res => console.log(res));