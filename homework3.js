let user_name = prompt("What is your name");
let user_age = prompt("What is your age");
let user_gender = prompt("What is your gender");
const user = {
    name: user_name,
    age: user_age,
    gender: user_gender
};
console.log("name = " + user.name);
console.log("age = " + user.age);
console.log("gender = " + user.gender);

let number = prompt("Write a number");
if(number < 0){
    alert("Number is " + number + " and it is negative");
} else {
    alert("Number is " + number + " and it is positive");
}

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number
switch(a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
        alert( '2,3' );
        break;
    case 3:
        alert( '2,3' );
        break;
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        sum += i;
    }
}
console.log(sum);
let i = 0;
while(i < 3){
    alert( `number ${i}!` );
    i++
}
