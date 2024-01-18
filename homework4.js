let age = 20;
function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}

let x = 3;
let n = 2;
function pow(x, n){
    let power = 1;
    for(let i = 0; i < n; i++){
        power *= x;
    }
    return power;
}
alert( pow(x,n) );

const ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=> b-a);
alert( arr ); // 8, 5, 2, 1, -10

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(user => user.name).join(', ');
alert(names);

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };
let users2 = [vasya2, petya2, masha2];
let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
console.log(usersMapped);

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };
let arr3 = [ vasya3, petya3, masha3 ];
function getAverageAge(arr3){
    let sum = 0;
    for(let i = 0; i < arr3.length; i++){
        sum+=arr3[i].age;
    }
    return sum/arr3.length;
}
alert( getAverageAge(arr3) ); // (25 + 30 + 29) / 3 = 28


  